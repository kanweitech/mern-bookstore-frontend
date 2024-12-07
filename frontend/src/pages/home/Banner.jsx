/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-12 py-16 md:flex-row-reverse'>
      <div className='flex items-center w-full md:w-1/2 md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>

        <div className='w-full md:w-1/2'>
            <h1 className='text-2xl font-medium md:text-5xl mb-7'>New Releases This Week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

    </div>
  )
}

export default Banner