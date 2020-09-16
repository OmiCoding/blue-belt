import React, { useContext } from "react"

import {
  IdentityContainer,
  ProfileName,
  DescLocation,
} from "../../../styles/dashboard/general/ProfileStyles"

import AccContext from "../../../context/accContext/AccContext"

const CompanyHeader = () => {
  const accContext = useContext(AccContext)

  const { companyName, city, province } = accContext

  return (
    <IdentityContainer>
      <ProfileName>{companyName}</ProfileName>
      <DescLocation>{`${city}, ${province}`}</DescLocation>
    </IdentityContainer>
  )
}

export default CompanyHeader
