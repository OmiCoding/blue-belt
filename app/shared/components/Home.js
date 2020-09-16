import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

import AppContext from "../context/globalContext/AppContext"

import GlobalLayout from "./GlobalLayout"
import {
  HomeWrapper,
  BgSVGWrapper,
  MaxContainer,
  NavBarWrapper,
  NavItems,
  NavLinks,
  LogoWrapper,
  Logo,
  LogoHeading,
  SignBtn,
} from "../../client/styles/home/HomeStyles"

import {
  ShowcaseWrapper,
  ShowcaseContent,
  ShowcaseMid,
  ShowcaseTitle,
  ShowcaseDesc,
  ShowcaseEnd,
  ShowcaseLink,
} from "../../client/styles/home/ShowcaseStyles"

import {
  SectionWrapper,
  SectionRevWrapper,
  SVGContainer,
  TextContainer,
  SectionHeader,
  SectionDesc,
} from "../../client/styles/home/SectionStyles"

import landscapeSVG from "../../client/assets/landscape-2.svg"
import peopleSVG from "../../client/assets/bar-people.svg"
import buildingsSVG from "../../client/assets/buildings.svg"
import phoneSVG from "../../client/assets/phone.svg"
import networkSVG from "../../client/assets/networking.svg"
import locationsSVG from "../../client/assets/locations.svg"

const Home = () => {
  const appContext = useContext(AppContext)

  return (
    <GlobalLayout>
      <HomeWrapper>
        <ShowcaseWrapper>
          <BgSVGWrapper
            style={{
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage: `url("/web/assets/landscape-2.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              zIndex: "1",
            }}
          />
          <BgSVGWrapper
            style={{
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundImage: `url("/web/assets/bar-people.svg")`,
              backgroundSize: "contain",
              backgroundPosition: "left",
              zIndex: "1",
            }}
          />
          <BgSVGWrapper
            style={{
              top: "0",
              right: "0",
              height: "100%",
              width: "100%",
              backgroundImage: `url("/web/assets/buildings.svg")`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              zIndex: "1",
            }}
          />
          <CSSTransition
            in={true}
            appear={true}
            classNames={"nav"}
            timeout={600}
          >
            <NavBarWrapper>
              <NavItems>
                <LogoHeading>blubelt</LogoHeading>
                <Link to="/" />
              </NavItems>
              <NavItems>
                <NavLinks>
                  <li>About</li>
                  <SignBtn>
                    Log In
                    <Link to="/login" />
                  </SignBtn>
                  <SignBtn>
                    Sign Up
                    <Link to="/register" />
                  </SignBtn>
                </NavLinks>
              </NavItems>
            </NavBarWrapper>
          </CSSTransition>
          <CSSTransition
            appear={true}
            in={true}
            classNames={"content"}
            timeout={600}
          >
            <ShowcaseContent>
              <ShowcaseMid>
                <ShowcaseTitle>Lorem ipsum dolor sit amet</ShowcaseTitle>
                <ShowcaseDesc>
                  Massa massa ultricies mi quis. Nulla facilisi nullam vehicula
                  ipsum a arcu cursus vitae congue
                </ShowcaseDesc>
              </ShowcaseMid>
              <ShowcaseEnd>
                <ShowcaseLink>
                  Get Started!
                  <Link to="/register" />
                </ShowcaseLink>
              </ShowcaseEnd>
            </ShowcaseContent>
          </CSSTransition>
        </ShowcaseWrapper>
        <SectionWrapper>
          <SVGContainer
            style={{
              backgroundImage: `url("/web/assets/phone.svg")`,
            }}
          />
          <TextContainer>
            <SectionHeader>
              Keep up with us on the go where ever you are.
            </SectionHeader>
            <SectionDesc>
              Tristique et egestas quis ipsum suspendisse ultrices gravida
              dictum fusce
            </SectionDesc>
          </TextContainer>
        </SectionWrapper>
        <SectionRevWrapper>
          <SVGContainer
            style={{
              backgroundImage: `url("/web/assets/networking.svg")`,
            }}
          />
          <TextContainer>
            <SectionHeader>
              Connect and socialize with others, or keep up with what is going
              on.
            </SectionHeader>
            <SectionDesc>
              Tristique et egestas quis ipsum suspendisse ultrices gravida
              dictum fusce
            </SectionDesc>
          </TextContainer>
        </SectionRevWrapper>
        <SectionWrapper>
          <SVGContainer
            style={{
              backgroundImage: `url("/web/assets/locations.svg")`,
            }}
          />
          <TextContainer>
            <SectionHeader>
              Search for jobs and contracts all throughout the country
            </SectionHeader>
            <SectionDesc>
              Tristique et egestas quis ipsum suspendisse ultrices gravida
              dictum fusce
            </SectionDesc>
          </TextContainer>
        </SectionWrapper>
      </HomeWrapper>
    </GlobalLayout>
  )
}

export default Home
