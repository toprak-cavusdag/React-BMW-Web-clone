import React from 'react';
import hero from '../../asset/bmw-i5.jpg';
import ilogo from '../../asset/i-logo.png';
import './Hero.css';
import BlueButton from '../buttons/BlueButton';
const Hero = () => {
  return (
    <div className=' flex justify-center text-white screen w-full hero-image'>
      <img src={hero} alt='hero image' className='object-cover' />
      <div className='Hero-center w-full container mx-auto'>
        <h6 className='font-semibold text-lg uppercase tracking-widest my-3'>
          Yeni
        </h6>
        <h1 className='font- text-[12rem] uppercase'>the bmw i5</h1>

        <p className='text-3xl uppercase font-light flex flex-row mb-6'>
          <span className='mt-4 mr-5'>
            <img src={ilogo} className='object-cover h-4' />
          </span>
          Bir ilk: Tamamen Elektrikli yeni bmw i5
        </p>

        <BlueButton title='Keşfedin' />
      </div>
    </div>
  );
};

export default Hero;
