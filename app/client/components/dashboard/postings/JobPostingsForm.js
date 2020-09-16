import React, { useState } from "react"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import axios from "axios"

import Options from "../Options"

import {
  PostingFormContainer,
  Form,
  InputWrapper,
  PostingHeader,
  QuillWrapper,
  SelectWrapper,
  SelectBox,
  SelectBtn,
  SelectFlex,
  MiniSelectWrapper,
  MiniSelectBox,
  MiniSelectBtn,
  MiniSelectFlex,
  SubmitBtn,
} from "../../../styles/dashboard/postings/FormStyles"
import {
  ModalExitBtn,
  FlexWrapper,
} from "../../../styles/general/GeneralStyles"

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: false }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
}

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "blockquote",
]

const options = ["Full-Time", "Part-Time", "Full/Part Time"]

const miniOptns = ["yr", "hr"]

const JobPostingsForm = ({ username, changeState }) => {
  const [state, setState] = useState({
    location: "",
    company: "",
    title: "",
    select: false,
    miniSelect: false,
    option: "Select job type",
    salary: "",
    miniOptn: "year",
  })
  const [body, setBody] = useState("")

  const {
    company,
    title,
    location,
    select,
    miniSelect,
    option,
    salary,
    miniOptn,
  } = state

  const handleChange = ({ target }) => {
    const { name, value } = target

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSelect = () => {
    setState({
      ...state,
      select: !select,
    })
  }

  const handleMiniSelect = () => {
    setState({
      ...state,
      miniSelect: !miniSelect,
    })
  }

  const handleOptions = (value) => {
    setState({
      ...state,
      option: value,
      select: false,
    })
  }

  const handleMiniOptns = (value) => {
    setState({
      ...state,
      miniOptn: value,
      miniSelect: false,
    })
  }

  const handleModal = () => {
    setState({
      location: "",
      company: "",
      title: "",
      select: false,
      miniSelect: false,
      option: "Select job type",
      salary: "",
      miniOptn: "year",
    })

    changeState((prevState) => {
      return {
        ...prevState,
        appear: false,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios({
      method: "post",
      url: `/dashboard/company/${username}/postings`,
      baseURL: "https://blubelt.com/",
      responseType: "json",
      data: {
        companyName: company,
        title: title,
        body: body,
        location: location,
        jobType: option === "Select job type" ? "" : option,
        salary: salary.length === 0 ? "" : `${salary} ${miniOptn}`,
      },
    })
      .then((res) => {
        setState({
          location: "",
          company: "",
          title: "",
          select: false,
          miniSelect: false,
          option: "Select job type",
          salary: "",
          miniOptn: "year",
        })
        changeState((prevState) => {
          return { ...prevState, appear: false, fetch: true }
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <PostingFormContainer>
      <PostingHeader>
        <h1>Create a Job Posting</h1>
      </PostingHeader>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <h3>Company</h3>
          <input value={company} name="company" onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <h3>Job Title</h3>
          <input value={title} name="title" onChange={handleChange} />
        </InputWrapper>
        <QuillWrapper>
          <h3>Job Description</h3>
          <span>
            Describe the responsibilities of this job, required work experience,
            skills, or education
          </span>
          <ReactQuill
            value={body}
            onChange={setBody}
            modules={modules}
            formats={formats}
            placeholder="About the job..."
          />
        </QuillWrapper>
        <InputWrapper>
          <h3>Location</h3>
          <span>{"Within the United States"}</span>
          <input value={location} name="location" onChange={handleChange} />
        </InputWrapper>
        <SelectWrapper>
          <h3>Job Type {"(Optional)"}</h3>
          <SelectFlex
            style={{
              borderBottom: select ? "unset" : "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <FlexWrapper>
              <SelectBox>
                <span>{option}</span>
              </SelectBox>
              <SelectBtn>
                {select ? (
                  <i className="fas fa-angle-up" />
                ) : (
                  <i className="fas fa-angle-down" />
                )}
              </SelectBtn>
            </FlexWrapper>
            <button type="button" onClick={handleSelect} />
            {select ? (
              <Options options={options} handleOptions={handleOptions} />
            ) : null}
          </SelectFlex>
        </SelectWrapper>
        <MiniSelectWrapper>
          <h3>Salary {"(Optional)"}</h3>
          <FlexWrapper
            style={{
              alignItems: "center",
            }}
          >
            <input
              value={salary}
              name="salary"
              onChange={handleChange}
              placeholder={miniOptn === "year" ? "$50,000.00/yr" : "$30/hr"}
            />
            <MiniSelectFlex
              style={{
                borderBottom: miniSelect
                  ? "unset"
                  : "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <FlexWrapper>
                <MiniSelectBox>
                  <span>{miniOptn}</span>
                </MiniSelectBox>
                <MiniSelectBtn>
                  {miniSelect ? (
                    <i className="fas fa-angle-up" />
                  ) : (
                    <i className="fas fa-angle-down" />
                  )}
                </MiniSelectBtn>
              </FlexWrapper>
              <button type="button" onClick={handleMiniSelect} />
              {miniSelect ? (
                <Options options={miniOptns} handleOptions={handleMiniOptns} />
              ) : null}
            </MiniSelectFlex>
          </FlexWrapper>
        </MiniSelectWrapper>
        <SubmitBtn>
          Create Job Post
          <button type="submit" />
        </SubmitBtn>
      </Form>
      <ModalExitBtn>
        <div>
          <button onClick={() => handleModal()} />
        </div>
      </ModalExitBtn>
    </PostingFormContainer>
  )
}

export default JobPostingsForm
