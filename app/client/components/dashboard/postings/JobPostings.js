import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react"

import loadable from "@loadable/component"
import { CSSTransition } from "react-transition-group"

import useResize from "../../../../utils/hooks/useResize"

import GlobalLayout from "../../../../shared/components/GlobalLayout"

import {
  PostingsContainer,
  PostingsMain,
  ButtonWrapper,
  PostingsButton,
  Border,
} from "../../../styles/dashboard/postings/MainStyles"

import AppContext from "../../../../shared/context/globalContext/AppContext"
import AccContext from "../../../context/accContext/AccContext"

import DashboardNav from "../DashboardNav"
import CompanyMenu from "../company/CompanyMenu"
import List from "../List"

import useCheckAuth from "../../../../utils/hooks/useCheckAuth"
import useJobList from "../../../../utils/hooks/useJobList"
import {
  MainWrapper,
  ModalWrapper,
} from "../../../styles/general/GeneralStyles"

const JobPostingsForm = loadable(() => import("./JobPostingsForm"), {
  ssr: false,
})

const Postings = () => {
  const appContext = useContext(AppContext)

  const { authenticated, authAccount, handleChoice } = appContext

  const accContext = useContext(AccContext)

  const { username, init, getUsername } = accContext

  const [state, setState] = useState({
    active: false,
    activate: null,
    device: null,
    desktopLg: false,
    list: null,
    appear: false,
    fetch: true,
    endpoint: "jobpostings",
    pathname: "",
  })

  const {
    active,
    activate,
    device,
    desktopLg,
    list,
    appear,
    fetch,
    endpoint,
    pathname,
  } = state

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

  const handleModal = () => {
    setState({
      ...state,
      appear: !appear,
    })
  }

  const setUp = useCallback(() => {
    if (init && authenticated) {
      return getUsername()
    } else if (!authenticated) {
      return authAccount()
    } else {
      return
    }
  }, [authenticated, init, getUsername])

  useCheckAuth(setUp)

  useJobList(fetch, init, setState, endpoint)

  useResize(device, desktopLg, setState)

  // useEffect(() => {
  //   if (location.search.length !== 0) {
  //     const queryObj = queryString.parse(location.search)
  //     axios({
  //       method: "post",
  //       url: "/dashboard/worker/jobs",
  //       baseURL: "http://localhost:8080/",
  //       body: {
  //         jobs: queryObj.jobs,
  //         location: queryObj.address,
  //       },
  //     })
  //       .then((res) => {
  //         setState((prevState) => {
  //           return {
  //             ...prevState,
  //           }
  //         })
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //       })
  //   }
  // }, [])

  return (
    <GlobalLayout>
      {init ? (
        <h1>Loading...</h1>
      ) : (
        <PostingsContainer>
          <DashboardNav activate={activate} handleMenu={handleMenu} />
          <CompanyMenu
            ref={dashRef}
            active={active}
            device={device}
            handleChoice={handleChoice}
          />
          <MainWrapper>
            <PostingsMain>
              <ButtonWrapper>
                <PostingsButton>
                  New Job Posting
                  <i className="fas fa-clipboard" />
                  <button onClick={() => handleModal()} />
                </PostingsButton>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={400}
                  classNames="border"
                >
                  <Border />
                </CSSTransition>
              </ButtonWrapper>
              {list ? <List list={list} pathname={pathname} /> : null}
            </PostingsMain>
          </MainWrapper>
          {appear ? (
            <ModalWrapper>
              <JobPostingsForm
                username={username}
                appear={appear}
                changeState={setState}
              />
            </ModalWrapper>
          ) : null}
        </PostingsContainer>
      )}
    </GlobalLayout>
  )
}

export default Postings
