import React from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput';

function Chat(props) {
  return (
    <div className="chat-container">
      <Username username={props.username} />
      <ChatLog chatLog={props.chatLog} username={props.username} />
      <ChatInput ChatInput={props.ChatInput} 
                    onChange={props.onChange} 
                    onSubmit={props.onSubmit} />
    </div>
  );
}

export default Chat;
