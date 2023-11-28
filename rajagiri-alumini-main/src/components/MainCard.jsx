import React, { useState, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

const MainCard = ({ token, post }) => {
  const [account, setAccount] = useState({});
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(true);
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(`post_${post.id}_like`);
    if (storedLikeStatus !== null) {
      setIsLiked(JSON.parse(storedLikeStatus));
    }
  }, [post.id]);

  const saveLikeStatus = (status) => {
    localStorage.setItem(`post_${post.id}_like`, JSON.stringify(status));
  };

  //Like post
  const likePost = async () => {
    try {
      const config = { headers: { 'Authorization': `token ${token}` } };
      const response = await axios.post(`http://127.0.0.1:8000/api/like-post/${post.id}/`, null, config);
      setLikesCount(response.data);
      const updatedLikeStatus = !isLiked;
      setIsLiked(updatedLikeStatus);
      saveLikeStatus(updatedLikeStatus);
    } catch (error) {
      console.error(error);
    }
  };

  const incrementCount = () => {
    setLikesCount(likesCount + 1);
  };


  //get comments displayed
  const getCommentsPost = async () => {
    try {
      const config = { headers: { 'Authorization': `token ${token}` } };
      const response = await axios.post(`http://localhost:8000/api/get-post-comments/${post.id}/`, null, config);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  getCommentsPost();

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const config = { headers: { 'Authorization': `token ${token}` } };
        const response = await axios.get(`http://127.0.0.1:8000/api/get-account-info/${post.account}/`, config);
        if (response.data) {
          setAccount(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAccountDetails();
  }, [post.account, token]);

  const date = new Date(post.date_created);

  return (
    <div className="w-[100%] h-[70%] mx-1 my-3 rounded-lg relative">
      <div className="relative">
        {/* Profile Image */}
        <img
          src="https://i.ibb.co/zf2NcWL/Group-3.png"
          alt="Profile"
          className="w-16 h-16 rounded-full absolute top-4 left-4"
        />

        {/* Account Details */}
        <div className="absolute top-4 left-24">
          <h2 className="text-2xl font-semibold">{`${account.firstName} ${account.lastName}`}</h2>
          <div className='flex justify-between'>
            <p className="text-sm text-gray-500">{date.toLocaleDateString("en-US")}  at <strong>Apple Park, California</strong></p>
            <BsThreeDots size='28' className='ml-60 -mt-4'/>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <img
        src="https://i.ibb.co/ZTWrZFf/pic.png"
        alt="Cover"
        className="w-full h-96 mt-24"
      />

      {/* Like, Comment, Share buttons with vertical lines */}
      <div className="flex mt-4">
        <button
          className="w-[33%] text-black py-2 rounded-lg relative flex items-center justify-center"
          onClick={likePost}
        >
          <div className="flex items-center" onClick={incrementCount}>
            {!isLiked ? <AiFillHeart size={36} color="red" /> : <AiOutlineHeart size={40}  />}
            <span  className="ml-2">{likesCount}</span>
          </div>
        </button>

        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button onClick={toggleComments} className="w-[33%] text-black py-2 rounded-lg">{showComments ? 'Hide Comments' : 'Comment'}</button>
        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Share</button>
      </div>

      {showComments && (
        <div className="mt-4">
          <textarea
            
            placeholder="Write a comment..."
            className="w-full h-20 p-2 border border-gray-300 rounded-md mb-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Send
          </button>
          <div className="mt-4">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCard;
