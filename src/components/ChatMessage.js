import React from "react";
import "./ChatMessage.css";

function ChatMessage({message, currentUser}) {
    const {user} = message;

    return (<div className={"chat-message"}>
        <img className={user.username === currentUser ? "my-avatar" : "avatar"} src={message.user.avatar} alt="avatar"/>
        <div className="conversation"><span className={user.username === currentUser ? "my-username" : "username"}>{message.user.username}</span>
        <div className={user.username === currentUser ? "my-message" : "message"}>
        <span>{message.body}</span></div></div></div>);
}

export default ChatMessage;