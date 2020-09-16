import React from "react"

import {
  IdentityContainer,
  ProfileName,
  DescOccupation,
  DescLocation,
} from "../../styles/dashboard/general/ProfileStyles"

const ProfileHeader = ({
  role,
  fName,
  lName,
  companyName,
  career,
  location,
}) => {
  return (
    <IdentityContainer>
      {role === "worker" ? (
        <>
          <ProfileName>{`${fName} ${lName}`}</ProfileName>
          <DescOccupation>{career}</DescOccupation>
        </>
      ) : (
        <ProfileName>{companyName}</ProfileName>
      )}
      <DescLocation>{location}</DescLocation>
    </IdentityContainer>
  )
}

export default ProfileHeader
