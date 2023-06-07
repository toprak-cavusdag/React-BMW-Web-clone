import React from 'react';
import bmwApp from '../../asset/bmw-app.webp';
import TransButton from '../buttons/TransButton';

const MobileApp = () => {
  return (
    <div className=' mx-auto flex  justify-center items-center px-[80px] py-4'>
      <div className='flex justify-center items-center'>
        <img src={bmwApp} alt='mobile app' className='h-[45vh]' />
      </div>

      <div className='flex flex-col  items-start justify-center pl-6'>
        <h4 className='uppercase tracking-wider text-lg'>
          bmw türkiye mobil uygulaması
        </h4>
        <h1 className='uppercase tracking-wider text-6xl font-light mt-6'>
          bmw dünyası tek uygulamada.
        </h1>
        <p className='tracking-wider font-light my-3'>
          BMW Türkiye mobil uygulamasını mobil cihazlarınıza indirip hemen
          kullanmaya başlayabilirsiniz.
        </p>

        <TransButton title='Keşfedin' />
      </div>
    </div>
  );
};

export default MobileApp;
