import React from "react"

import {
  PostHeader,
  HeaderItems,
  PostAvatarWrapper,
  PostAvatar,
  NameWrapper,
  PostOption,
} from "../../../styles/dashboard/general/PostnFeedStyles"

const PostsHeader = ({ firstN, lastN, profilePic }) => {
  return (
    <PostHeader>
      <HeaderItems>
        <PostAvatarWrapper>
          <PostAvatar src={profilePic} />
        </PostAvatarWrapper>
        <NameWrapper>
          <h3>{`${firstN} ${lastN}`}</h3>
          <span>Iron Worker</span>
        </NameWrapper>
      </HeaderItems>
      <HeaderItems>
        <PostOption>
          <i className="fas fa-ellipsis-h" />
        </PostOption>
      </HeaderItems>
    </PostHeader>
  )
}

export default PostsHeader
