import React from 'react';
import './ImageSection.css';
import TransButton from '../buttons/TransButton';

const ImageSection = ({ image, title, desc, btn }) => {
  return (
    <div className='flex relative mb-10'>
      <img
        src={image}
        alt='background'
        className='w-full h-full object-cover'
      />
      <div className='absolute w-full h-full image-shadow'></div>
      <div className=' w-full center flex justify-center flex-col text-white container mx-auto'>
        <h6 className='tracking-wider uppercase text-sm font-light'>{title}</h6>
        <h1 className='tracking-wide text-6xl uppercase font-light my-6 max-w-4xl'>
          {desc}
        </h1>

        <TransButton title={btn} />
      </div>
    </div>
  );
};

export default ImageSection;
