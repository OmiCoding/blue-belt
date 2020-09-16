import React from "react"
import ListCard from "./ListCard"

const List = ({ list, pathname }) => {
  return list.map((elem, ind) => {
    return (
      <ListCard
        key={ind}
        id={elem._id}
        pathname={pathname}
        title={elem.title}
        companyName={elem.companyName}
        location={elem.location}
        salary={elem.salary}
      />
    )
  })
}

export default List
