import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from "react"

import axios from "axios"
import queryString from "query-string"

import AppContext from "../../../../shared/context/globalContext/AppContext"
import AccContext from "../../../context/accContext/AccContext"

import DashboardNav from "../DashboardNav"
import WorkerMenu from "../worker/WorkerMenu"
import List from "../List"

import useCheckAuth from "../../../../utils/hooks/useCheckAuth"
import useResize from "../../../../utils/hooks/useResize"
import SearchForm from "./SearchForm"

import GlobalLayout from "../../../../shared/components/GlobalLayout"
import {
  SearchContainer,
  SearchMain,
} from "../../../styles/dashboard/search/MainStyles"

const JobSearch = ({ location }) => {
  const { authenticated, authAccount, handleChoice } = useContext(AppContext)

  const { init, endInit } = useContext(AccContext)

  const [state, setState] = useState({
    active: false,
    activate: null,
    device: null,
    desktopLg: false,
    list: null,
    pathname: "",
  })

  const { active, activate, device, desktopLg, list, pathname } = state

  const dashRef = useRef(null)

  const handleMenu = () => {
    if (activate === null) {
      return setState({
        ...state,
        active: !active,
        activate: true,
      })
    } else if (activate === true) {
      setState({
        ...state,
        active: !active,
        activate: !activate,
      })
    } else if (activate === false) {
      setState({
        ...state,
        active: !active,
        activate: !activate,
      })
    }
  }

  const handleSearch = (event) => {}

  const setUp = useCallback(() => {
    if (init && authenticated) {
      return endInit()
    } else if (!authenticated) {
      return authAccount()
    } else {
      return
    }
  }, [authenticated, init, endInit])

  useCheckAuth(setUp)
  useResize(device, desktopLg, setState)

  useEffect(() => {
    if (location.search.length !== 0) {
      const queryObj = queryString.parse(location.search)
      axios({
        method: "post",
        url: "/dashboard/jobs",
        baseURL: "https://blubelt.com/",
        body: {
          jobs: queryObj.jobs,
          location: queryObj.address,
        },
      })
        .then((res) => {
          return res.data
        })
        .then((data) => {
          setState((prevState) => {
            return {
              ...prevState,
              list: [...data.list],
              pathname: data.pathname,
            }
          })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [])

  return (
    <GlobalLayout>
      {init ? (
        <h1>Loading...</h1>
      ) : (
        <SearchContainer>
          <DashboardNav activate={activate} handleMenu={handleMenu} />
          <WorkerMenu
            ref={dashRef}
            active={active}
            device={device}
            handleChoice={handleChoice}
          />
          <SearchMain>
            <SearchForm handleSearch={handleSearch} />
            {list ? <List list={list} pathname={pathname} /> : null}
          </SearchMain>
        </SearchContainer>
      )}
    </GlobalLayout>
  )
}

export default JobSearch
