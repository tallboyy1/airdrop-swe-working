import React, { useState, useEffect, useRef } from 'react';
// import './ChatWindow.css';


function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const endOfMessagesRef = useRef(null);

  //function to simulate receiving a message from the platform
  const receiveMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUserMessage: false }]);
  };

  //function when the user sends a message
  const sendMessage = (userInput) => {
    // Update the chat with the user's message
    setMessages((prevMessages) => [...prevMessages, { text: userInput, isUserMessage: true }]);
    // Simulate receiving a response after a delay
    setTimeout(() => receiveMessage("Here's a response from the platform!"), 1000);
  };

  // Automatically scroll to the latest message
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isUserMessage ? 'user' : 'platform'}`}>
          {message.text}
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

export default ChatWindow;
