import React from "react"
import {
  FeedContainer,
  SortWrapper,
  SortBtn,
} from "../../../styles/dashboard/general/PostnFeedStyles"

import Contacts from "../Contacts"
import Messenger from "../Messenger"
import CreatePost from "../CreatePost"
import Posts from "./Posts"

const Feed = ({ results, feedload, desktopLg }) => {
  return (
    <FeedContainer>
      {desktopLg ? null : (
        <>
          <Contacts results={[...results]} />
          <Messenger results={[...results]} />
        </>
      )}
      <CreatePost />
      <SortWrapper>
        <SortBtn>
          Sort By
          <i className="fas fa-chevron-down" />
          <button />
        </SortBtn>
      </SortWrapper>
      <Posts results={[...results]} />
      {feedload ? <h2>loading...</h2> : null}
    </FeedContainer>
  )
}

export default Feed
