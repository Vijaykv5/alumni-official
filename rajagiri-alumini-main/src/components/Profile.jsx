import React from 'react'
import ProfileRightCard from './ProfileRightCard'
import MainCard from './mainCard'
import Navbar from './Navbar'
import Profile1 from './Profile1'


const Profile = () => {
  const token = "76b2ffa50794aa43fedacb5462e3d1ca15ffbca6"

  let posts = [
    {
      id: 4,
      image: "/IMG_0740.JPG",
      caption: "Farewell",
      date_created: "2023-11-08T14:22:33.270095Z",
      account: 2,
      likes: [],
      comments: []
    }
  ];

  return (
    <div>
      <Navbar/>
    
    <div className='flex  '>
      
        <div className='flex flex-col w-[50%] ml-40'>
        <Profile1/>
        <h2 className="text-2xl ml-4 pt-4 font-semibold text-gray-800">Posts</h2>
          {posts.map(post => (
            <MainCard  token={token} post={post}/>
        
          ))}
         
        </div>
        <ProfileRightCard/>
        </div>
    </div>
  )
}

export default Profile