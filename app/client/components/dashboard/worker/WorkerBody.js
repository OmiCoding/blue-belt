import React from "react"

import {
  SectionWrapper,
  PortfolioWrapper,
  PortfolioTitle,
  PortfolioIconWrapper,
} from "../../styles/dashboard/WorkerStyles"

const WorkerBody = ({ fName, lName }) => {
  return (
    <SectionWrapper>
      <PortfolioWrapper>
        <PortfolioTitle>Upload A Resume</PortfolioTitle>
        <PortfolioIconWrapper>
          <i className="fas fa-file-alt" />
        </PortfolioIconWrapper>
      </PortfolioWrapper>
    </SectionWrapper>
  )
}

export default WorkerBody
