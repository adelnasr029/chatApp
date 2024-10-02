// Importing React for component creation
import React from 'react';

// MessageList component to display a list of chat messages
const MessageList = ({ messages }) => {
  // Reverse the array of messages so the oldest message appears first
  const reversedMessages = [...messages].reverse();
  return (
    <div className="flex-1 p-2 overflow-auto bg-white rounded-lg shadow-lg">
      {/* Header for the message list */}
      <h2 >Messages</h2>
      
      {/* Unordered list to display messages */}
      <ul>
        {/* Mapping through the 'messages' array to create a list item for each message */}
        {reversedMessages.map((message, index) => (
          <div className="space-y-4">
          <li key={index} className="p-2 bg-blue-100 rounded-lg mb-2">
            {/* Display the timestamp of the message */}
            <span className="timestamp">
              {new Date(message.timestamp).toLocaleString()}:
            </span>
            {/* Display the username of the sender or 'Anonymous' if not available */}
            <span className="username">
              {message.user ? message.user.username : 'Anonymous'}-
            </span>
            {/* Display the content of the message */}
            {message.content}
          </li>
          </div>
        ))}
      </ul>
      
    </div>
  );
};

// Exporting the MessageList component for use in other parts of the application
export default MessageList;
