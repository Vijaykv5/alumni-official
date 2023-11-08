import React, { useState, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import axios from 'axios';

const MainCard = ({ token, post }) => {
  const [account, setAccount] = useState({});
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [commentsCount, setCommentsCount] = useState(post.comments.length);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
          const config = { headers: { 'Authorization': `token ${token}` } };
          console.log(post.account, token);
          const response = await axios.get(`http://127.0.0.1:8000/api/get-account-info/${post.account}/`, config);
          if (response.data) {
            setAccount(response.data);
            console.log(response.data);
          }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAccountDetails()
  }, []);

  const date = new Date(post.date_created);
  console.log(date)

  const likePost = async () => {
    try {
      const config = { headers: { 'Authorization': `token ${token}` } };
      console.log(post.account, token);
      const response = await axios.post(`http://127.0.0.1:8000/api/like-post/${post.id}/`,null, config);
      setLikesCount(response.data);
      console.log(response.data, likesCount);
      
    } catch (error) {
      console.error(error);
    }
  }

  console.log("Likes: ",likesCount);
  return (
    <div className="w-[100%] h-[70%]  mx-1  my-3 rounded-lg relative">
      <div className="relative">
        <img
          src="https://i.ibb.co/zf2NcWL/Group-3.png"
          alt="Profile"
          className="w-16 h-16 rounded-full absolute top-4 left-4"
        />

        <div className="absolute top-4 left-24">
          <h2 className="text-2xl font-semibold">{`${account.firstName} ${account.lastName}`}</h2>
          <div className='flex justify-between'>
            <p className="text-sm text-gray-500">{date.toLocaleDateString("en-US")}  at <strong>Apple Park, California</strong></p>
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
        <button className="w-[33%] text-black py-2 rounded-lg" onClick={likePost}>Like ({likesCount})</button>
        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Comment ({commentsCount})</button>
        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Share</button>
      </div>
    </div>
  );
};

export default MainCard;
