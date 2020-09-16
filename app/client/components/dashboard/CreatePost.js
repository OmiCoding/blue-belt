import React, { useState } from "react"

import {
  PostContainer,
  TextWrapper,
  PostText,
  OptionWrapper,
  MediaOptions,
} from "../../styles/dashboard/general/PostnFeedStyles"

const CreatePost = () => {
  const [state, setState] = useState({
    post: "",
    show: false,
  })

  const { show, post } = state

  const handleChange = ({ target }) => {
    const { name, value } = target

    if (value.length > 0) {
      if (show === true) {
        setState({
          ...state,
          [name]: value,
        })
      } else {
        setState({
          ...state,
          [name]: value,
          show: true,
        })
      }
    } else {
      setState({
        ...state,
        [name]: value,
        show: false,
      })
    }
  }

  return (
    <PostContainer>
      <TextWrapper>
        <PostText
          name="post"
          minLength={1}
          maxLength={280}
          value={post}
          onChange={handleChange}
        />
        {show ? null : <label>Start a post...</label>}
        <OptionWrapper>
          <MediaOptions>
            <i className="fas fa-camera" />
            <button />
          </MediaOptions>
          <MediaOptions>
            <i className="fas fa-video" />
            <button />
          </MediaOptions>
          <MediaOptions>
            <i className="fas fa-paperclip" />
            <button />
          </MediaOptions>
        </OptionWrapper>
      </TextWrapper>
    </PostContainer>
  )
}

export default CreatePost
