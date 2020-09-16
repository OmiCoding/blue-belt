import React from "react"

import {
  CredentialsContainer,
  CredentialHeading,
  CrendentialBtn,
  CredentialItem,
} from "../../../styles/dashboard/general/ProfileStyles"

const CompanyCredentials = () => {
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
        <span>New York, NY</span>
      </CredentialItem>
      <CredentialItem>
        <div>
          <i className="fas fa-at" />
          <h3>Email</h3>
        </div>
        <span>thebrickcompany@gmail.com</span>
      </CredentialItem>
      <CredentialItem>
        <div>
          <i className="fas fa-link" />
          <h3>Link</h3>
        </div>
        <span>blubelt.com/dashboard/company/thebrickcompany</span>
      </CredentialItem>
      <CredentialItem>
        <div>
          <i className="fas fa-globe" />
          <h3>Website</h3>
        </div>
        <span>https://www.thebrickcompany.com</span>
      </CredentialItem>
    </CredentialsContainer>
  )
}

export default CompanyCredentials
