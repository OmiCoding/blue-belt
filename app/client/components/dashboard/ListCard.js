import React from "react"
import { Link } from "react-router-dom"
import {
  CardWrapper,
  Title,
  Description,
  Salary,
  BadgeWrapper,
  Badge,
} from "../../styles/dashboard/postings/CardStyles"

const ListCard = ({ id, pathname, title, companyName, location, salary }) => {
  const newTitle = title.split(" ").join("+")
  const newLocation = location.split(" ").join("+")

  return (
    <CardWrapper>
      <Title>
        {title}
        <Link
          to={{
            pathname: pathname + "/" + id,
            search: `?job=${newTitle}&location=${newLocation}`,
          }}
        />
      </Title>
      <Description>{companyName}</Description>
      <Description>{location}</Description>
      <Salary>{salary}</Salary>
      <BadgeWrapper>
        <Badge>
          <i className="fab fa-telegram-plane" />
          <span>Easily apply</span>
        </Badge>
        <Badge>
          <i className="fas fa-clock" />
          <span>Urgently Hiring</span>
        </Badge>
      </BadgeWrapper>
    </CardWrapper>
  )
}

export default ListCard
