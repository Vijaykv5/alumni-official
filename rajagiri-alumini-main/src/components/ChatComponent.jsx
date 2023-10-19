import React from "react";

const ChatComponent = () => {
  return (
    <div className="flex h-screen px-8 py-10 ">
      <div className="w-96 bg-white rounded-lg">
        <div className="text-center py-4">
          <h2 className="text-xl font-bold">Chat</h2>
        </div>
        <div className="pt-4 px-4">
        <input
          type="text"
          className="w-full rounded-md bg-slate-200 mx-auto block p-2 mb-4"
          placeholder="Search..."
        />
        </div>
        <div className="h-full p-4">
          <div className="flex items-center   rounded-md bg-slate-200 w-full h-20 p-2">
            <div className="flex">
            <img
              src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg"
              alt="Profile Photo"
              className="w-16  h-16 rounded-full "
            />
            
            <div className=" p-2 rounded-lg font-semibold">Vijay KV</div>
            <div className=" justify-between space-x-3 font-semibold">5.59pm</div>

            </div>
            <div className="bg-green-200  p-2 rounded-lg">Hey! How are you?</div>
            
          </div>
          {/* Add more chat bubbles here */}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
