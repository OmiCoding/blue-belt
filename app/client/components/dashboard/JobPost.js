import React, { useState, useRef, useContext, useCallback } from "react"

import AppContext from "../../../shared/context/globalContext/AppContext"
import AccContext from "../../context/accContext/AccContext"

import useCheckAuth from "../../../utils/hooks/useCheckAuth"
import useResize from "../../../utils/hooks/useResize"
import useGetJobs from "../../../utils/hooks/useGetJobs"

import DashboardNav from "./DashboardNav"
import WorkerMenu from "./worker/WorkerMenu"
import CompanyMenu from "./company/CompanyMenu"

import GlobalLayout from "../../../shared/components/GlobalLayout"
import {
  PostContainer,
  ContentWrapper,
  HeadingContainer,
  HeadingDesc,
  BodyContainer,
} from "../../styles/dashboard/postings/PostStyles"
import { MainWrapper } from "../../styles/general/GeneralStyles"

const JobPost = ({ match }) => {
  const appContext = useContext(AppContext)

  const { role, authenticated, authAccount, handleChoice, params } = appContext

  const accContext = useContext(AccContext)

  const { init, endInit } = accContext

  const [state, setState] = useState({
    active: false,
    activate: null,
    device: null,
    desktopLg: false,
    fetch: true,
    id: params ? params : match.params.id,
    title: "",
    location: "",
    companyName: "",
    jobType: "",
    salary: "",
    body: "",
  })

  const {
    active,
    activate,
    device,
    desktopLg,
    fetch,
    id,
    title,
    location,
    companyName,
    jobType,
    salary,
    body,
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

  useGetJobs(id, init, fetch, setState)

  useResize(device, desktopLg, setState)

  return (
    <GlobalLayout>
      {init ? (
        <h1>Loading...</h1>
      ) : (
        <PostContainer>
          <DashboardNav activate={activate} handleMenu={handleMenu} />
          {role === "company" ? (
            <CompanyMenu
              ref={dashRef}
              active={active}
              device={device}
              handleChoice={handleChoice}
            />
          ) : (
            <WorkerMenu
              ref={dashRef}
              active={active}
              device={device}
              handleChoice={handleChoice}
            />
          )}
          <MainWrapper>
            <PostContainer>
              <ContentWrapper>
                <HeadingContainer>
                  <h1>{title}</h1>
                  <HeadingDesc>
                    <span>{companyName}</span>
                    <span>-</span>
                    <span>{location}</span>
                  </HeadingDesc>
                </HeadingContainer>
                <BodyContainer dangerouslySetInnerHTML={{ __html: body }} />
              </ContentWrapper>
            </PostContainer>
          </MainWrapper>
        </PostContainer>
      )}
    </GlobalLayout>
  )
}

export default JobPost
