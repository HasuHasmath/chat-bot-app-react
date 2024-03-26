import React from "react";
import { ChatDots, Person } from "react-bootstrap-icons";

export default function ChatMessages(props) {
  return (
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
      {props.user ? (
        <span className="message-right">
          <span className="message-text">{props.message}</span>
          <Person className="message-icon" />
        </span>
      ) : (
        <span className="message-left">
          <ChatDots className="message-icon" />
          <span className="message-text">{props.message}</span>
        </span>
      )}
    </div>
  );
}