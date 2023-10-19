import React from 'react';
import Navbar from './components/Navbar';
import MainCard from './components/mainCard';
import ProfileRightCard from './components/ProfileRightCard';

const App = () => {
  const randomNames = ["Godwin Gino", "Gautham Sudheer", "Gayathri", "Elvin Eldho", "Allwyin"];

  return (
    <div>
      <Navbar />
      <div className=' h-fit flex'>
      <div className="w-1/5 h-full flex flex-col pt-12 items-center rounded-lg mx-12 my-9">
      <img
        src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg" 
        alt="Profile"
        className="w-16 h-16 rounded-full mb-4"
      />

     <h2 className="text-xl font-semibold">Welcome, User! </h2>
      
    </div>
        <div className='flex flex-col'>
          {randomNames.map((name, index) => (
            <MainCard key={index} randomName={name} />
          ))}
        </div>
        <ProfileRightCard />
      </div>
    </div>
  );
}

export default App;
