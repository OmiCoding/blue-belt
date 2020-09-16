import React, { useContext } from "react"

import {
  CredentialsContainer,
  CredentialItem,
  CredentialHeading,
  CrendentialBtn,
} from "../../../styles/dashboard/general/ProfileStyles"

import AccContext from "../../../context/accContext/AccContext"

const WorkerCredentials = () => {
  const accContext = useContext(AccContext)

  const { username, email, city, province, education } = accContext

  return (
    <CredentialsContainer>
      <CredentialHeading>
        <h3>About</h3>
        <CrendentialBtn>
          Edit
          <i className="fas fa-edit" />
          <button />
        </CrendentialBtn>
      </CredentialHeading>
      <CredentialItem>
        <div>
          <i className="fas fa-map-marker-alt" />
          <h3>Location</h3>
        </div>
        <span>{`${city}, ${province}`}</span>
      </CredentialItem>
      <CredentialItem>
        <div>
          <i className="fas fa-at" />
          <h3>Email</h3>
        </div>
        <span>{email}</span>
      </CredentialItem>
      <CredentialItem>
        <div>
          <i className="fas fa-graduation-cap" />
          <h3>Education</h3>
        </div>
        <span>{education}</span>
      </CredentialItem>
      <CredentialItem>
        <div>
          <i className="fas fa-link" />
          <h3>Link</h3>
        </div>
        <span>{`blubelt.com/dashboard/worker/${username}`}</span>
      </CredentialItem>
    </CredentialsContainer>
  )
}

export default WorkerCredentials
