import React from 'react';

const profile1= () => {
  return (
    <div className="mt-8 rounded-lg text-white">
      {/* Cover Photo Section */}
      <div className="relative rounded-md">
        <img
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Cover Photo"
          className="w-full h-40"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg"
            alt="Profile Photo"
            className="w-32 h-32 rounded-full border-4 border-white my-24 mx-4"
          />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="mt-20 px-4">
        <h1 className="text-3xl font-semibold text-gray-800">Vijay Kv</h1>
        <p className="text-gray-600">Software Engineer</p>
        <p className="text-gray-600 text-sm">Silicon Valley, California</p>
      </div>
      <div className="flex space-x-4 ml-4 mt-2">
        <div className="text-center">
          <p className="text-gray-800 font-semibold">10 Posts</p>
        </div>
        <div className="text-center">
          <p className="text-gray-800 font-semibold">600 Connections</p>
        </div>
      </div>
      
      {/* Actions and Stats Section */}
      <div className="bg-white p-4 flex justify-between items-center rounded-lg">
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Follow
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover-bg-blue-600">
            Message
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white p-4 mt-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">About</h2>
        <p className="text-gray-600 mt-2">
          I am a Computer Science & Engineer undergraduate student at Rajagiri School of Engineering & Technology. My passion for helping others publish their skills and talents using the digital platform has been evident in my involvement in building a few projects. Through those experiences, I have learned to interact with a diverse group of people, which has increased my ability to relate to others. I have also had the opportunity to create websites for individuals that focused on life skills like teamwork, communication, and time management. Website and App development were my gateway to the creative industry, which inspired me to start my own projects and to take my first steps in the digital world. I have a thorough understanding of front-end development and have been mostly involved in establishing effective client relationships. Over time, I have developed a superior understanding of client service and client relationship management.
        </p>
      </div>

        {/* Skills Section */}
        <div className="bg-white p-4 mt-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        {/* Skill 1 */}
        <div className="flex items-center bg-slate-200 rounded-xl mt-2">
          
          <div className=" ml-4 my-4">
            <p className="text-black font-bold text-lg">Communication</p>
           <div className='flex space-x-2 my-2'>
           <img
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            alt="Skill 1 Logo"
            className="w-6 h-6 rounded-full"
          />
            <p className="text-gray-600 text-sm">3 experiences across Google and 1 other company</p>
           </div>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 rounded-xl mt-2">
          
          <div className=" ml-4 my-4">
            <p className="text-black font-bold text-lg">Continuous Integration and Continuous Delivery</p>
           <div className='flex space-x-2 my-2'>
           <img
            src="https://cdn-icons-png.flaticon.com/512/152/152752.png"
            alt="Skill 1 Logo"
            className="w-6 h-6 rounded-full"
          />
            <p className="text-gray-600 text-sm">3 experiences across Apple and 1 other company</p>
           </div>
          </div>
        </div>
        <div className="flex items-center bg-slate-200 rounded-xl mt-2">
          
          <div className=" ml-4 my-4">
            <p className="text-black font-bold text-lg">Single Page Applications</p>
           <div className='flex space-x-2 my-2'>
           <img
            src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
            alt="Skill 1 Logo"
            className="w-6 h-6 rounded-full"
          />
            <p className="text-gray-600 text-sm">3 experiences across Spotify and 1 other company</p>
           </div>
          </div>
        </div>

        <div className="flex items-center bg-slate-200 rounded-xl mt-2">
          
          <div className=" ml-4 my-4">
            <p className="text-black font-bold text-lg">Pipeline Integration</p>
           <div className='flex space-x-2 my-2'>
           <img
            src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
            alt="Skill 1 Logo"
            className="w-6 h-6 rounded-full"
          />
            <p className="text-gray-600 text-sm">3 experiences across Youtube and 1 other company</p>
           </div>
          </div>
        </div>

        </div>
      
    </div>
  );
};

export default profile1;
