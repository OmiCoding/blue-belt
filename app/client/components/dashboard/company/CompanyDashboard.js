import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react"

import debounce from "lodash/debounce"
import axios from "axios"

import useLoadFeed from "../../../../utils/hooks/useLoadFeed"
import useResize from "../../../../utils/hooks/useResize"

import DashboardNav from "../DashboardNav"
import CompanyMenu from "./CompanyMenu"

import AppContext from "../../../../shared/context/globalContext/AppContext"
import AccContext from "../../../context/accContext/AccContext"
import GlobalLayout from "../../../../shared/components/GlobalLayout"
import {
  DashboardLayout,
  DashboardMain,
  ThirdPanel,
} from "../../../styles/dashboard/general/MainStyles"
import { DeviceLayout } from "../../../styles/general/GeneralStyles"

import Feed from "../feed/Feed"
import Contacts from "../Contacts"
import Messenger from "../Messenger"
import CompanyProfile from "./CompanyProfile"
import useCheckAuth from "../../../../utils/hooks/useCheckAuth"

const CompanyDashboard = () => {
  const appContext = useContext(AppContext)

  const { authenticated, authAccount, handleChoice } = appContext

  const accContext = useContext(AccContext)

  const { init, getCompanyDetails, username } = accContext

  const [state, setState] = useState({
    active: false,
    activate: null,
    employed: false,
    feedload: false,
    results: [],
    device: null,
    desktopLg: false,
    feedLen: null,
  })

  const { active, activate, device, desktopLg, results, feedload } = state

  const dashRef = useRef(null)
  const mainRef = useRef(null)

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

  const debounceLoadData = useCallback(
    debounce(({ srcElement }) => {
      if (srcElement.scrollTop === srcElement.scrollTopMax) {
        setState((prevState) => {
          return {
            ...prevState,
            feedload: true,
          }
        })
        axios({
          method: "get",
          url: "https://randomuser.me/api/?results=10",
          responseType: "json",
        })
          .then(({ data }) => {
            return setState((prevState) => {
              return {
                ...prevState,
                results: [...prevState.results, ...data.results],
                feedload: false,
              }
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }, 100),
    []
  )

  const setUp = useCallback(() => {
    if (init && authenticated) {
      return getCompanyDetails()
    } else if (!authenticated) {
      return authAccount()
    } else {
      return
    }
  }, [authenticated, init, getCompanyDetails])

  useCheckAuth(setUp)
  useLoadFeed(init, mainRef, debounceLoadData, setState)
  useResize(device, desktopLg, setState)

  return (
    <GlobalLayout>
      {init ? (
        <h2>Loading...</h2>
      ) : (
        <DashboardLayout>
          <DashboardNav activate={activate} handleMenu={handleMenu} />
          <CompanyMenu
            ref={dashRef}
            active={active}
            device={device}
            handleChoice={handleChoice}
            username={username}
          />
          <DeviceLayout ref={mainRef}>
            <DashboardMain>
              <CompanyProfile />
              <Feed
                results={results}
                feedload={feedload}
                desktopLg={desktopLg}
              />
              {desktopLg ? (
                <ThirdPanel>
                  <Contacts results={[...results]} />
                  <Messenger results={[...results]} />
                </ThirdPanel>
              ) : null}
            </DashboardMain>
          </DeviceLayout>
        </DashboardLayout>
      )}
    </GlobalLayout>
  )
}

export default CompanyDashboard
