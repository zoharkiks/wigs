import React from "react";
import { Icon } from "@iconify/react";
import closeIcon from "../../node_modules/@iconify-icons/mdi/close";
import searchWeb from "../../node_modules/@iconify-icons/mdi/search-web";

const MobNav = ({ open, setOpen }) => {
  return (
    <div className="bg-opacity-50 bg-black w-screen fixed top-0 left-0 z-10 ">
      <div className="h-screen w-[75%] flex flex-col rounded-r-[10px]  bg-white">
        <div className="flex justify-end p-4 ">
          <Icon
            icon={closeIcon}
            className="h-7 w-7 p-1 bg-gray-400 rounded-full"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col px-8  space-y-6">
          <div className="flex mx-auto">
            <input
              type="search"
              name=""
              placeholder="Search Store"
              className=" pl-8  font-circular outline-none "
            />
            <Icon icon={searchWeb} className="absolute h-6 w-6    " />
          </div>
          <div className="flex flex-col space-y-4 border-b-2 pb-6 border-gray-400 ">
            <h3 className="font-circular text-xl ">products</h3>
            <h3 className="font-circular text-xl ">story</h3>
            <h3 className="font-circular text-xl ">manufacturing</h3>
            <h3 className="font-circular text-xl ">packaging</h3>
          </div>

          <div className="flex flex-col space-y-4 border-b-2 pb-6 border-gray-400">
          <h2 className="font-sofia text-[30px]">Explore</h2>
          <span className='text-lg'>⚡ New In</span>
        <span className='text-lg'>👘 Clothing</span>
        <span className='text-lg'>👞 Shoes</span>
        <span className='text-lg'>👜 Accessories</span>
        <span className='text-lg'>🕺 Activewear</span>
        <span className='text-lg'>🎁 Gifts & Living</span>
        <span className='text-lg'>💎 Inspiration</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MobNav;
