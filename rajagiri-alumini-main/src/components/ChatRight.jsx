
import React from "react";

const ChatRight = () => {
  return (
    <>
    <div className="w-[60%] mx-auto my-10">
    <div className="rounded-md bg-white h-screen text-center align-middle  ">
            <h1 className=" py-[50%] font-semibold text-4xl ">Click on a chat to message!</h1>
        </div>
      <div className="w-full flex">
       
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Message"
        />
        <button className="rounded-full  p-3 bg-slate-400 ">▶️</button>
        
    
      </div>
    </div>
    </>
  );
};

export default ChatRight;
