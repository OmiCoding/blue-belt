import React, { useState } from "react"

import MessengerUsers from "./MessengerUsers"

import {
  MessengerContainer,
  HeaderItems,
  MessengerHeader,
  MessengerSearch,
  Messages,
  MessageScroll,
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeading,
} from "../../styles/dashboard/general/MessengerStyles"

const Messenger = ({ results }) => {
  const [state, setState] = useState({
    search: "",
  })

  const string =
    "Magna sint proident occaecat minim. Excepteur esse cupidatat cupidatat excepteur velit ad ullamco magna duis est anim et. Consectetur dolore aliquip non consectetur exercitation id Lorem eu proident quis consectetur elit ex eiusmod. Qui fugiat qui nisi est occaecat minim est Lorem sint id culpa anim. Eiusmod laborum reprehenderit reprehenderit ut quis nisi esse sit elit amet. In ea veniam ullamco anim in labore ipsum sit commodo ad ex. Deserunt enim dolor quis eu ea ut."

  const words = string.split(" ")

  const { search } = state

  const handleChange = ({ target }) => {
    const { name, value } = target

    setState({
      ...state,
      [name]: value,
    })
  }

  return (
    <MessengerContainer>
      <MessengerHeader>
        <HeaderItems>
          <h3>Messaging</h3>
        </HeaderItems>
        <HeaderItems>
          <div>
            <i className="fas fa-edit" />
            <button />
          </div>
          <div>
            <i className="fas fa-ellipsis-h" />
            <button />
          </div>
        </HeaderItems>
      </MessengerHeader>
      <MessengerUsers results={results} />
      <MessengerSearch>
        <input
          type="text"
          value={search}
          name="search"
          onChange={handleChange}
        />
        <label>
          <i className="fas fa-search" />
          Search for messages, contacts
        </label>
      </MessengerSearch>
      <Messages>
        <MessageScroll>
          {results.map((elem, ind) => {
            return (
              <Message key={ind}>
                <MessageAvatar>
                  <img src={elem.picture.thumbnail} />
                </MessageAvatar>
                <MessageContent>
                  <MessageHeading>
                    <span>{elem.name.first}</span>
                    <span>9:00 PM</span>
                  </MessageHeading>
                  {words.length > 8
                    ? words.splice(0, 8).join(" ")
                    : words.join(" ")}
                </MessageContent>
              </Message>
            )
          })}
        </MessageScroll>
      </Messages>
    </MessengerContainer>
  )
}

export default Messenger
