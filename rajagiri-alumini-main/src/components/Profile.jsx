import React from 'react'
import ProfileRightCard from './ProfileRightCard'
import MainCard from './mainCard'
import Navbar from './Navbar'
import Profile1 from './Profile1'


const Profile = () => {
  const randomNames = ["Godwin Gino", "Gautham Sudheer", "Gayathri", "Elvin Eldho", "Allwyin"];
  return (
    <div>
      <Navbar/>
    
    <div className='flex  '>
      
        <div className='flex flex-col w-[50%] ml-40'>
        <Profile1/>
        <h2 className="text-2xl ml-4 pt-4 font-semibold text-gray-800">Posts</h2>
          {randomNames.map((name, index) => (
           
            <MainCard  key={index} randomName={name}/>
        
          ))}
         
        </div>
        <ProfileRightCard/>
        </div>
    </div>
  )
}

export default Profile