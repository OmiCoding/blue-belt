import React from "react"

import {
  AvatarWrapper,
  Avatar,
  AvatarButton,
  AvatarImgWrapper,
} from "../../styles/dashboard/general/ProfileStyles"

import profileImg from "../../assets/profile-01.jpg"

const AvatarContainer = () => {
  return (
    <AvatarWrapper>
      <Avatar src={profileImg} />
    </AvatarWrapper>
  )
}

export default AvatarContainer
