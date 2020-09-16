import React from "react"

import {
  AccImage,
  AccImgContainer,
  AccButtonWrapper,
} from "../../styles/dashboard/general/NavigationStyles"

import profileImg from "../../assets/profile-01.jpg"

const AccButton = () => {
  return (
    <AccButtonWrapper>
      <AccImgContainer>
        <AccImage src={profileImg} />
      </AccImgContainer>
      <div className="account-drop-down">
        My Account
        <span />
      </div>
    </AccButtonWrapper>
  )
}

export default AccButton
