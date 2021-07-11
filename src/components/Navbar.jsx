import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import MobNav from './MobNav'
import cartOutline from "../../node_modules/@iconify-icons/mdi/cart-outline";
import accountIcon from "../../node_modules/@iconify-icons/mdi/account";
import searchWeb from "../../node_modules/@iconify-icons/mdi/search-web";
import microsoftXboxControllerMenu from "../../node_modules/@iconify-icons/mdi/microsoft-xbox-controller-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <nav className=" navbar flex pt-[38px] px-14 items-center justify-between md:pt-[24px] sm:px-7 sm:pb-4">
      <Icon
        icon={microsoftXboxControllerMenu}
        className="h-10 w-10 hidden md:block "
        onClick={() => setOpen(!open)}
      />
      {open ? (
       <MobNav open={open} setOpen={setOpen}/>
      ) : (
        ""
      )}
     
<div className=" justify-center items-center hidden md:flex ">
  <img src="./images/logo.png" className='ml-4 h-[54px] ' alt="" />
</div>


      <div className=" flex  md:hidden ">
        <input
          type="search"
          name=""
          placeholder="Search Store"
          className=" pl-8 font-circular outline-none"
        />
        <Icon icon={searchWeb} className="absolute h-6 w-6  " />
      </div>
      <div className="hidden space-x-4 md:flex">
        <Icon icon={cartOutline} className="h-6 w-6 cursor-pointer" />
        <Icon icon={accountIcon} className="h-6 w-6 cursor-pointer" />
      </div>

      <div className="flex space-x-10 text-[17px] lg:text-[15px] md:hidden  ">
        <h3 className="font-circular cursor-pointer hover:border-b-2 border-yellow-400">products</h3>
        <h3 className="font-circular cursor-pointer hover:border-b-2 border-yellow-400 ">story</h3>
        <h3 className="font-circular cursor-pointer hover:border-b-2 border-yellow-400">manufacturing</h3>
        <h3 className="font-circular cursor-pointer hover:border-b-2 border-yellow-400 ">packaging</h3>
        <div className="flex items-center space-x-[25px]">
          <Icon icon={cartOutline} className="h-6 w-6 cursor-pointer" />
          <Icon icon={accountIcon} className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
