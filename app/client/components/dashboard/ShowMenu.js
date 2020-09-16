import React from "react"
import {
  MenuButton,
  ButtonWrapper,
  Hamburger,
  Slice1,
  Slice2,
  Slice3,
  Slice4,
} from "../../styles/dashboard/general/NavigationStyles"

const ShowMenu = ({ active, activate, handleMenu }) => {
  return (
    <>
      <MenuButton>
        <ButtonWrapper>
          <Hamburger>
            <div>
              <Slice1
                className={
                  activate === null
                    ? ""
                    : activate
                    ? "animation-one-open"
                    : "animation-one-close"
                }
              />
              <Slice2
                className={
                  activate === null
                    ? ""
                    : activate
                    ? "animation-two-open"
                    : "animation-two-close"
                }
              />
              <Slice3
                className={
                  activate === null
                    ? ""
                    : activate
                    ? "animation-three-open"
                    : "animation-three-close"
                }
              />
              <Slice4
                className={
                  activate === null
                    ? ""
                    : activate
                    ? "animation-four-open"
                    : "animation-four-close"
                }
              />
            </div>
          </Hamburger>
          <button onClick={() => handleMenu()} />
        </ButtonWrapper>
      </MenuButton>
    </>
  )
}

export default ShowMenu
