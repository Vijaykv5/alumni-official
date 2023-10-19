import React from 'react'
import Navbar from './Navbar'
import ChatComponent from './ChatComponent'
import ChatRight from './ChatRight'



const Chat = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-slate-200'>
       
     
       <div className='flex '>
       <ChatComponent/>
        <ChatRight/>
       </div>
    
        </div>
    </div>
  )
}

export default Chat