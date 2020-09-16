import React from "react"

import AvatarContainer from "../AvatarContainer"

import ProfileEdit from "../ProfileEdit"
import WorkerHeader from "./WorkerHeader"
import ProfileActivity from "../ProfileActivity"
import WorkerCredentials from "./WorkerCredentials"

import { ProfileDisplay } from "../../../styles/dashboard/general/ProfileStyles"

const UserProfile = () => {
  return (
    <ProfileDisplay>
      <AvatarContainer />
      <ProfileEdit />
      <WorkerHeader />
      <ProfileActivity />
      <WorkerCredentials />
    </ProfileDisplay>
  )
}

export default UserProfile
