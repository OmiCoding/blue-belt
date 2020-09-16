import React from "react"

import skylineImg from "../../../assets/skyline.jpg"

import {
  PostComment,
  PostBodyWrapper,
  PostActivity,
  MiniCircle,
  InteractWrapper,
  InteractItem,
  PostImageWrapper,
  PostImage,
} from "../../../styles/dashboard/general/PostnFeedStyles"

const PostBody = () => {
  const string =
    "Look at this beautiful shot of the building we're working on, it's incredible I can't believe how far we've come on this project it looks beautiful."
  const words = string.split(" ")

  return (
    <PostBodyWrapper>
      <PostComment>
        {words.length > 15 ? (
          <>
            <p>{words.slice(0, 15).join(" ")}</p>
            <div>
              ...see more
              <button />
            </div>
          </>
        ) : (
          <p>{words.join(" ")}</p>
        )}
      </PostComment>
      <PostImageWrapper>
        <PostImage src={skylineImg} />
      </PostImageWrapper>
      <PostActivity>
        <div>
          <i className="far fa-thumbs-up" />
        </div>
        <span>12 likes</span>
        <MiniCircle />
        <span>1 comment</span>
      </PostActivity>
      <InteractWrapper>
        <InteractItem>
          <i className="far fa-thumbs-up" />
          <span>Like</span>
          <button />
        </InteractItem>
        <InteractItem>
          <i className="fas fa-edit" />
          <span>Comment</span>
          <button />
        </InteractItem>
        <InteractItem>
          <i className="fas fa-share-alt" />
          <span>Share</span>
          <button />
        </InteractItem>
      </InteractWrapper>
    </PostBodyWrapper>
  )
}

export default PostBody
