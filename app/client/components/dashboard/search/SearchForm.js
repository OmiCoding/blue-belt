import React, { useState } from "react"

import { CSSTransition } from "react-transition-group"

import {
  FormWrapper,
  Form,
  InputWrapper,
  SearchButton,
  FormBorder,
} from "../../../styles/dashboard/search/FormStyles"

const SearchForm = ({ handleSearch }) => {
  const [state, setState] = useState({
    jobs: "",
    address: "",
  })

  const { jobs, address } = state

  const handleChange = ({ target }) => {
    const { name, value } = target

    setState({
      ...state,
      [name]: value,
    })
  }

  return (
    <FormWrapper>
      <Form onSubmit={(e) => handleSearch(e, jobs, location)}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames={"input"}
        >
          <InputWrapper>
            <div>
              <input
                type="text"
                value={jobs}
                name="jobs"
                onChange={handleChange}
              />
              <span>Search for jobs...</span>
            </div>
            <label>
              <i className="fas fa-search" />
            </label>
          </InputWrapper>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames={"input"}
        >
          <InputWrapper>
            <div>
              <input
                type="text"
                value={address}
                name="address"
                onChange={handleChange}
              />
              <span>City, state, zip code</span>
            </div>
            <label>
              <i className="fas fa-map-marker-alt" />
            </label>
          </InputWrapper>
        </CSSTransition>
        <SearchButton type="submit">Find Jobs</SearchButton>
      </Form>
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames={"border"}
      >
        <FormBorder />
      </CSSTransition>
    </FormWrapper>
  )
}

export default SearchForm
