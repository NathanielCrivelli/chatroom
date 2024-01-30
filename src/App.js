import React, { useState } from 'react';
import Username from './Username';
import ChatLog from './ChatLog';
import ChatInput from './ChatInput'
import './App.css';

function App() {

  const [username, setUsername] = useState('Test user');
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState([])

  return (
    <div className="chat-container">
      <Username />
      <ChatLog />
      <ChatInput />
    </div>
  );
}

export default App;
