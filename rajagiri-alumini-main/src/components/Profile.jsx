import React, { useEffect, useState } from 'react';
import ProfileRightCard from './ProfileRightCard';
import MainCard from './mainCard';
import Navbar from './Navbar';
import Profile1 from './Profile1';
import axios from 'axios';

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const config = { headers: { 'Authorization': `token ${token}` } };
        const response = await axios.get('http://127.0.0.1:8000/api/get-profile/', config);
        setPosts(response.data);
        console.log(response);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // Empty dependency array to run only once on component mount

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
