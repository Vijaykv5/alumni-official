import React, { useState } from "react";
import { BsPlusCircleFill } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';

const Modal = ({ isOpen, onClose, children }) => {
  const modalClass = isOpen ? "block" : "hidden";

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${modalClass}`}>
      <div className="bg-white p-4 rounded-lg w-96">
        <div className="flex justify-end">
          <IoIosCloseCircle onClick={onClose} size={30} className="cursor-pointer" />
        </div>
        {children}
      </div>
    </div>
  );
};

const ChatComponent = () => {
  const [button, setButton] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const option = () => {
    setButton(!button);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen px-8 py-10 ">
      <div className="w-96 bg-white rounded-lg">
        <div className="text-center py-4">
          <h2 className="text-xl font-bold">Chat</h2>
        </div>
        <div className="pt-4 px-4">
          <input
            type="text"
            className="w-full rounded-md bg-slate-200 mx-auto block p-2 mb-4"
            placeholder="Search..."
          />
        </div>
        <div className="h-full p-4">
          <div className="flex items-center rounded-md bg-slate-200 w-full h-20 p-2">
            <div className="flex">
              <img
                src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg"
                alt="Profile Photo"
                className="w-16  h-16 rounded-full"
              />

              <div className=" rounded-lg w-20 font-semibold">Vijay KV</div>
              <div className="justify-between space-x-8 ml-[80%] font-semibold">5.59pm</div>
            </div>
            <div className="bg-green-200 -mx-28  px-2 rounded-lg">Hey! How are you?</div>
          </div>

          {button ? (
            <div className="ml-[80%] mt-[100%] hover:cursor-pointer ">
              <BsPlusCircleFill onClick={option} size={48} />
            </div>
          ) : (
            <div className="ml-[79%] mt-[100%] hover:cursor-pointer ">
              <IoIosCloseCircle onClick={option} size={60} />
            </div>
          )}

          {button ? (
            <></>
          ) : (
            <div className="ml-[50%]   ">
              <div className="bg-gray-300 p-3 w-fit rounded-md -mt-[100%] hover:cursor-pointer" onClick={openModal}>
                New Conversation
              </div>

              <div className="bg-gray-300 p-3 w-fit mt-3 rounded-md hover:cursor-pointer" onClick={openModal}>
                New Group
              </div>
            </div>
          )}

         
          <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="pt-4 px-4">
          <input
            type="text"
            className="w-full rounded-md bg-slate-200 mx-auto block p-2 mb-4"
            placeholder="Search..."
          />
        </div>
        <div className="h-full p-4">
          <div className="flex items-center rounded-md bg-slate-200 w-full h-20 p-2">
            <div className="flex">
              <img
                src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg"
                alt="Profile Photo"
                className="w-16  h-16 rounded-full"
              />

              <div className="p-2 rounded-lg font-semibold">Vijay KV</div>
              <div className="justify-between space-x-3 font-semibold">5.59pm</div>
            </div>
            <div className="bg-green-200 p-2 rounded-lg">Hey! How are you?</div>
          </div>
        </div>

        {/* SECOND CONTACT  */}
        <div className="h-full p-4">
          <div className="flex items-center rounded-md bg-slate-200 w-full h-20 p-2">
            <div className="flex">
              <img
                src="https://i.ibb.co/68Vymy9/aeecc22a67dac7987a80ac0724658493.jpg"
                alt="Profile Photo"
                className="w-16  h-16 rounded-full"
              />

              <div className="p-2 rounded-lg font-semibold">Vijay KV</div>
              <div className="justify-between space-x-3 font-semibold">5.59pm</div>
            </div>
            <div className="bg-green-200 p-2 rounded-lg">Hey! How are you?</div>
          </div>
        </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
