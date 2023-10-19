import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const MainCard = ({ randomName }) => {
  return (

        <div className="w-[100%] h-[70%]  mx-1  my-3 rounded-lg relative">
      <div className="relative">
        <img
          src="https://i.ibb.co/zf2NcWL/Group-3.png"
          alt="Profile"
          className="w-16 h-16 rounded-full absolute top-4 left-4"
        />

        <div className="absolute top-4 left-24">
          <h2 className="text-2xl font-semibold">{randomName}</h2>
          <div className='flex justify-between'>
            <p className="text-sm text-gray-500">22 September , 2022  at <strong>Apple Park, California</strong></p>
            <BsThreeDots size='28' className='ml-60 -mt-4'/>
          </div>
        </div>
      </div>

      <img
        src="https://i.ibb.co/ZTWrZFf/pic.png"
        alt="Cover"
        className="w-full h-96 mt-24"
      />

      {/* Like, Comment, Share buttons with vertical lines */}
      <div className="flex mt-4">
        <button className="w-[33%] text-black py-2 rounded-lg">Like</button>
        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Comment</button>
        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Share</button>
      </div>
    </div>
    
    
  );
};

export default MainCard;
