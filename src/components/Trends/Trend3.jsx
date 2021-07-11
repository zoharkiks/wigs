import React from 'react'

import { Icon } from "@iconify/react";

import heartCircleOutline from "../../../node_modules/@iconify-icons/mdi/heart-circle-outline";

const Trend3 = () => {
    return (
        <div className='trend3 cursor-pointer hover:scale-[1.02] transition-all relative rounded-[10px] w-full h-[380px] xl:h-[340px] lg:h-[280px] bg-no-repeat bg-cover bg-center' style={{
            backgroundImage: `url('./images/Trend3.png')`,
          }}>
            <Icon icon={heartCircleOutline} className='absolute h-10 w-10 top-2 right-2 text-white' />
            
        </div>
    )
}

export default Trend3
