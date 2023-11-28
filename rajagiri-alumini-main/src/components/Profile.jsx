import React, { useEffect, useState } from 'react';
import ProfileRightCard from './ProfileRightCard';
import MainCard from './MainCard';
import Navbar from './Navbar/Navbar';
import Profile1 from './Profile1';
import axios from 'axios';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='flex flex-col w-[50%] ml-40'>
          <Profile1 />
          <h2 className='text-2xl ml-4 pt-4 font-semibold text-gray-800'>Posts</h2>
          {/* {posts.map((post) => (
            <MainCard key={post.id} token={token} post={post} />
          ))} */}
        </div>
        <ProfileRightCard />
      </div>
    </div>
  );
};

export default Profile;
