import React, { useState } from 'react';
// import './MessageInput.css'; // CSS for your message input

function MessageInput() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Logic to send message goes here
    console.log(message);
    setMessage('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>SEND</button>
    </div>
  );
}

export default MessageInput;
