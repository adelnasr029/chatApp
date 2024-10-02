// Importing React and useState hook for component creation and state management
import React, { useState } from 'react';

// MessageInput component for handling user chat input
const MessageInput = ({ sendMessage }) => {
  // State variable for the chat message
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Call the sendMessage function passed as a prop to send the message
    sendMessage(message);

    // Clear the message input field
    setMessage('');
  };

  // Render the message input form
  return (
    <form onSubmit={handleSubmit}  className="p-4 bg-white shadow-lg rounded-lg mt-2 mb-4">
      {/* Input field for chat message */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

      />
      {/* Submit button to send the message */}
      <button type="submit" 
          className="px-4 p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
      >Send</button>
    </form>
  );
};

// Exporting the MessageInput component for use in other parts of the application
export default MessageInput;
