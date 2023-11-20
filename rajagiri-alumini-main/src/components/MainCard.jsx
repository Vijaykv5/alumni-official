import React, { useState, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // Import heart icons from react-icons library
import axios from 'axios';

const MainCard = ({ token, post }) => {
  const [account, setAccount] = useState({});
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [commentsCount, setCommentsCount] = useState(post.comments.length);
  const [isLiked, setIsLiked] = useState(false); // Track if the post is liked by the user

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

  const likePost = async () => {
    try {
      const config = { headers: { 'Authorization': `token ${token}` } };
      const response = await axios.post(`http://127.0.0.1:8000/api/like-post/${post.id}/`, null, config);
      setLikesCount(response.data);
      setIsLiked(!isLiked); // Toggle the like status
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-[100%] h-[70%]  mx-1  my-3 rounded-lg relative">
      <div className="relative">
        {/* Profile Image */}
        <img
          src="https://i.ibb.co/zf2NcWL/Group-3.png"
          alt="Profile"
          className="w-16 h-16 rounded-full absolute top-4 left-4"
        />

        <div className="absolute top-4 left-24">
          {/* Account Details */}
          <h2 className="text-2xl font-semibold">{`${account.firstName} ${account.lastName}`}</h2>
          <div className='flex justify-between'>
            {/* Date and Location */}
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
      <button className="w-[33%] text-black py-2 rounded-lg relative flex items-center justify-center" onClick={likePost}>
  <div className="flex items-center"> 
    {isLiked ? <AiFillHeart size={36} color="red" /> : <AiOutlineHeart size={40} />}
    <span className="ml-2">{likesCount}</span>
  </div>
</button>



        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Comment ({commentsCount})</button>
        <div className="border-l border-slate-300 h-8 mx-2"></div> {/* Vertical line */}
        <button className="w-[33%] text-black py-2 rounded-lg">Share</button>
      </div>
    </div>
  );
};

export default MainCard;
