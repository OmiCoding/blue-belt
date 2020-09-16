import React from "react"

import AvatarContainer from "../AvatarContainer"

import ProfileEdit from "../ProfileEdit"
import CompanyHeader from "./CompanyHeader"
import ProfileActivity from "../ProfileActivity"
import CompanyCredentials from "./CompanyCredentials"

import { ProfileDisplay } from "../../../styles/dashboard/general/ProfileStyles"

const UserProfile = () => {
  return (
    <ProfileDisplay>
      <AvatarContainer />
      <ProfileEdit />
      <CompanyHeader />
      <ProfileActivity />
      <CompanyCredentials />
    </ProfileDisplay>
  )
}

export default UserProfile
