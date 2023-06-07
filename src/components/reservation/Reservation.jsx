import React from 'react';
import IconCard from '../IconCard/IconCard';
import cars from '../../asset/cars.webp';
import call from '../../asset/NxW_Home_ICON_TESTDRIVE.webp';
import price from '../../asset/priceList.webp';

const Reservation = () => {
  return (
    <div className='py-10 px-5 flex justify-center flex-col items-center container mx-auto'>
      <h6 className='uppercase font-semibold tracking-widest text-lg'>
        SONRAKİ ADIMLAR
      </h6>

      <h1 className='tracking-wider font-light my-3 text-5xl'>
        BMW’NİZİ REZERVE EDİN.
      </h1>

      <div className='flex'>
        <IconCard
          buttonText='Tasarlamaya başlayın'
          image={cars}
          title='Tasarlayın ve Rezerve Edin.'
        />

        <IconCard
          buttonText='BMW Canlı Destek.'
          image={call}
          title='Görüşmeye başlayın'
        />

        <IconCard buttonText='Fiyat Listesi' image={price} title='İnceleyin' />
      </div>
    </div>
  );
};

export default Reservation;
