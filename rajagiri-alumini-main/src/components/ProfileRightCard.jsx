import React from 'react';

export const Notifications = () => {
  return (
    <div className="w-[80%] h-fit bg-white flex flex-col pt-7 rounded-lg mx-12 my-9 ">
      <h1 className="text-xl px-4">Notifications</h1>
      {/* Add more content for the right-side card here */}
      <div className="flex flex-col space-y-4 p-2">
        {/* First Card */}
        <div className="relative bg-white rounded-lg border border-gray-300 p-2 flex items-center space-x-2">
          <img
            className="w-12 h-12 rounded-full bg-blue-500"
            src="https://i.ibb.co/Kqy1NV5/avtar.png"
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="text-md font-semibold">George Binu</span>
            <span className="text-xs text-gray-500 w-36">
              Accepted your connection!
            </span>
          </div>
          <div className="flex-grow"></div>
          <button className="w-8 h-8 bg-gray-300 rounded-md flex items-center justify-center absolute right-4 top-4">
            <img src='https://i.ibb.co/BVMmBsK/accept.png"'/>
          </button>
        </div>
        <div className="relative bg-white rounded-lg border border-gray-300 p-2 flex items-center space-x-2">
          <img
            className="w-12 h-12 rounded-full bg-blue-500"
            src="https://i.ibb.co/Kqy1NV5/avtar.png"
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="text-md font-semibold">George Binu</span>
            <span className="text-xs text-gray-500 w-36">
              Accepted your connection!
            </span>
          </div>
          <div className="flex-grow"></div>
          <button className="w-8 h-8 bg-gray-300 rounded-md flex items-center justify-center absolute right-4 top-4">
            <img src='https://i.ibb.co/BVMmBsK/accept.png"'/>
          </button>
        </div>
        <div className="relative bg-white rounded-lg border border-gray-300 p-2 flex items-center space-x-2">
          <img
            className="w-12 h-12 rounded-full bg-blue-500"
            src="https://i.ibb.co/Kqy1NV5/avtar.png"
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="text-md font-semibold">George Binu</span>
            <span className="text-xs text-gray-500 w-36">
              Accepted your connection!
            </span>
          </div>
          <div className="flex-grow"></div>
          <button className="w-8 h-8 bg-gray-300 rounded-md flex items-center justify-center absolute right-4 top-4">
            <img src='https://i.ibb.co/BVMmBsK/accept.png"'/>
          </button>
        </div>


 
      </div>
    </div>
  );
};
const ProfileRightCard = () => {
  const names = ['Elvin Thomas', 'Gautham', 'Godwin Gino', 'Vijay KV'];

  return (
    <div className="flex flex-col ">
      <div className="w-[80%] h-fit flex flex-col pt-7 rounded-lg mx-12 my-9">
        <h1 className="text-xl px-4">People also viewed</h1>
        <div className="flex flex-col space-y-4 p-2">
          {names.map((name, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg border border-gray-300 p-2 flex items-center space-x-2"
            >
              <img
                className="w-12 h-12 rounded-full bg-blue-500"
                src="https://i.ibb.co/rFMPKCf/Group-8.png"
                alt="Profile"
              />
              <div className="flex flex-col">
                <span className="text-md font-semibold">{name}</span>
                <span className="text-xs text-gray-500 w-36">
                  Chief Executive Officer, Google
                </span>
              </div>
              <div className="flex-grow"></div>
              <button className="w-10 h-8 bg-gray-300 rounded-md flex items-center justify-center  right-4 top-4">
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col rounded-lg">
        <Notifications />
      </div>
    </div>
  );
};


export default ProfileRightCard;
