import React from "react"
import {
  ProfileContainer,
  ProfileScroll,
  Profile,
  ProfileImg,
} from "../../styles/dashboard/general/MessengerStyles"

const MessengerUsers = ({ results }) => {
  return (
    <ProfileContainer>
      <ProfileScroll>
        {results.map((elem, ind) => {
          if (ind < 10) {
            return (
              <Profile key={ind}>
                <ProfileImg>
                  <img src={elem.picture.thumbnail} />
                </ProfileImg>
                <h5>{elem.name.first}</h5>
              </Profile>
            )
          } else {
            return null
          }
        })}
      </ProfileScroll>
    </ProfileContainer>
  )
}

export default MessengerUsers
