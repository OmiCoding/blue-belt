import React from "react"
import {
  ActivityContainer,
  Activity,
} from "../../styles/dashboard/general/ProfileStyles"

const ProfileActivity = () => {
  return (
    <ActivityContainer>
      <Activity>
        <h3>457</h3>
        <span>Profile Views</span>
      </Activity>
      <Activity>
        <h3>37</h3>
        <span>Posts</span>
      </Activity>
      <Activity>
        <h3>203</h3>
        <span>Connections</span>
      </Activity>
    </ActivityContainer>
  )
}

export default ProfileActivity
