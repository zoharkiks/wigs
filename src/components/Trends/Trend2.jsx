import React from 'react'

import { Icon } from "@iconify/react";

import heartCircleOutline from "../../../node_modules/@iconify-icons/mdi/heart-circle-outline";

const Trend2 = () => {
    return (
        <div className='trend2 relative rounded-[10px] w-full h-[380px] xl:h-[340px] lg:h-[280px] bg-no-repeat bg-cover bg-center' style={{
            backgroundImage: `url('./images/Trend2.png')`,
          }}>
            <Icon icon={heartCircleOutline} className='absolute h-10 w-10 top-2 right-2 text-white' />
            
        </div>
    )
}

export default Trend2
