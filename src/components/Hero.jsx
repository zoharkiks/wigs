import React from "react";
import { Icon } from '@iconify/react';
import chevronRightCircleOutline from "../../node_modules/@iconify-icons/mdi/chevron-right-circle-outline";

import Offer1 from "./Offers/Offer1";
import Offer2 from "./Offers/Offer2";
import Offer3 from "./Offers/Offer3";
import Offer4 from "./Offers/Offer4";
import Trend1 from "./Trends/Trend1"
import Trend2 from "./Trends/Trend2"
import Trend3 from "./Trends/Trend3"
import Trend4 from "./Trends/Trend4"

const Hero = () => {
  return (
    <main className="hero grid grid-cols-12 grid-rows-2 gap-5  p-12 md:grid-cols-4 sm:p-6 relative">
      
      {/* <Icon icon={chevronRightCircleOutline} className='h-10 w-10 top-[30rem] left-0 hidden absolute md:block  ' /> */}

      <div className="flex flex-col col-span-6 space-y-[19px]">
        <Offer1 />
        <Offer2 />
      </div>

      <div className="flex col-span-6 h-full space-x-[19px]">
        <Trend1/>
        <Trend2/>
        
      </div>

      <div className="flex col-span-6 space-x-[19px] ">
      <Trend3/>
      <Trend4/>
      </div>

      <div className="flex flex-col col-span-6 space-y-[19px]">
        <Offer3 />
        <Offer4 />
      </div>
    </main>
  );
};

export default Hero;
