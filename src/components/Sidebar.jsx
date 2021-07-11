import React from "react";
import { Icon } from "@iconify/react";
import chatIcon from "../../node_modules/@iconify-icons/mdi/chat";

const Sidebar = () => {
  return (
    <sidebar className="sidebar md:hidden flex flex-col  w-[252px] pt-[3.19rem] pb-[3.71rem] pl-[3.50rem] pr-[2.63rem] lg:pr-0 lg:pl-[1.5rem] ">
      <div className="flex items-center ">
  <img src="./images/logo.png" className='object-contain h-[54px] ' alt="" />
</div>
 
      <h2 className="font-sofia text-[30px] mt-[48px]">Explore</h2>
      <div className="flex flex-col font-sofia text-[15.76px] space-y-7 mt-[44.24px] lg:text-[13.76px]">
        <span>⚡ New In</span>
        <span>👘 Clothing</span>
        <span>👞 Shoes</span>
        <span>👜 Accessories</span>
        <span>🕺 Activewear</span>
        <span>🎁 Gifts & Living</span>
        <span>💎 Inspiration</span>
      </div>

      <div className="flex mt-[300px] space-x-2 items-center xl:mt-[230px] lg:mt-[100px]">
        <Icon icon={chatIcon} />
        <span className="font-sofia text-[15.76px]">Help Center</span>
      </div>
    </sidebar>
  );
};

export default Sidebar;
