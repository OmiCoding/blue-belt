import React from "react"

import PostsHeader from "./PostsHeader"
import PostBody from "./PostBody"

import { PostsWrapper } from "../../../styles/dashboard/general/PostnFeedStyles"

const Posts = ({ results }) => {
  return results.map((elem, ind) => {
    return (
      <PostsWrapper key={ind}>
        <PostsHeader
          firstN={elem.name.first}
          lastN={elem.name.last}
          profilePic={elem.picture.thumbnail}
        />
        <PostBody />
      </PostsWrapper>
    )
  })
}

export default Posts
