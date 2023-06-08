import React from 'react';

const FooterBottom = () => {
  return (
    <div className='py-7 flex justify-between container'>
      <div className='flex'>
        <h1 className='text-lg tracking-widest font-light'>© BMW AG 2023 </h1>
      </div>

      <div className='flex gap-5 font-semibold text-sm'>
        <h1 className='tracking-widest  hover:text-bmwBlue cursor-pointer'>
          Tanımlama Bilgileri (Çerezler)
        </h1>
        <h1 className='tracking-widest  hover:text-bmwBlue cursor-pointer'>
          Yasal Notlar
        </h1>
        <h1 className='tracking-widest  hover:text-bmwBlue cursor-pointer'>
          Kişisel Verilerin Korunması
        </h1>
      </div>
    </div>
  );
};

export default FooterBottom;
