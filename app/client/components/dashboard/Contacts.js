import React, { useState } from "react"
import {
  ContactsContainer,
  ContactsHeader,
  SliderContainer,
  Slider,
  SliderItem,
  SliderImg,
} from "../../styles/dashboard/general/ContactStyles"

const Contacts = ({ results }) => {
  return (
    <ContactsContainer>
      <ContactsHeader>
        <span>New Contacts</span>
        <div>
          See all
          <button />
        </div>
      </ContactsHeader>
      <SliderContainer>
        <Slider>
          {results.map((elem, ind) => {
            if (ind < 10) {
              return (
                <SliderItem key={ind}>
                  <SliderImg>
                    <img src={elem.picture.large} />
                  </SliderImg>
                  <h4>{`${elem.name.first} ${elem.name.last}`}</h4>
                  <span>Iron Worker</span>
                  <button>Connection</button>
                </SliderItem>
              )
            } else {
              return null
            }
          })}
        </Slider>
      </SliderContainer>
    </ContactsContainer>
  )
}

export default Contacts
