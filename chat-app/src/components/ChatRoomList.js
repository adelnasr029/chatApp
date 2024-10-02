// Importing React for component creation
import React from 'react';

// ChatRoomList component to display a list of available chat rooms, imports room list and joinRoom function
const ChatRoomList = ({ rooms, joinRoom }) => {
  return (
  <div class="flex">
  <div className='justify-end'>
      {/* Header for the chat room list */}
      <h2 className="text-lg font-semibold mb-4">Chat Rooms</h2>
      
      {/* Unordered list to display chat rooms */}
      <ul>
        {/* Mapping through the 'rooms' array to create a list item for each room */}
        {rooms.map((room, index) => (
          <li key={index} className='w-64 m-2 '>
            {/* Button to join a specific chat room, triggers 'joinRoom' function */}
            <button onClick={() => joinRoom(room)}
              className={`p-2 bg-blue-500 cursor-pointer rounded hover:bg-gray-200 transition${joinRoom === room ? 'bg-gray-300 font-semibold' : ''}`}
              >Join {room}</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

// Exporting the ChatRoomList component for use in other parts of the application
export default ChatRoomList;