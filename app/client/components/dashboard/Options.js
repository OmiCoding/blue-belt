import React from "react"

import { OptionWrapper, OptnItem } from "../../styles/general/GeneralStyles"

const Options = ({ options, handleOptions }) => {
  return (
    <OptionWrapper>
      {options.map((elem, ind) => {
        return (
          <OptnItem key={ind}>
            <span>{elem}</span>
            <button onClick={() => handleOptions(elem)} />
          </OptnItem>
        )
      })}
    </OptionWrapper>
  )
}

export default Options
