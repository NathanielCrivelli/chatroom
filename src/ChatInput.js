import React from 'react';

function ChatInput(props) {
  return (
    <div className="chat-message-input">
      <form onSubmit={props.onSubmit}>
        <input type="text"
          name="message-input"
          id="message-input"
          onChange={props.onChange}
          value={props.messageInput}
          placeholder='Enter your message'>
        </input>
      </form>
    </div>
  );
}

export default ChatInput;
