import React, { useContext } from "react"

import {
  IdentityContainer,
  ProfileName,
  DescOccupation,
  DescLocation,
} from "../../../styles/dashboard/general/ProfileStyles"

import AccContext from "../../../context/accContext/AccContext"

const WorkerHeader = () => {
  const accContext = useContext(AccContext)

  const { fName, lName, career, city, province } = accContext

  return (
    <IdentityContainer>
      <ProfileName>{`${fName} ${lName}`}</ProfileName>
      <DescOccupation>{career}</DescOccupation>
      <DescLocation>{`${city}, ${province}`}</DescLocation>
    </IdentityContainer>
  )
}

export default WorkerHeader
