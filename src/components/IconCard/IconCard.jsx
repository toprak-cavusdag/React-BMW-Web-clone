import React from 'react';
import TransButton from '../buttons/TransButton';

const IconCard = ({ image, title, buttonText }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div>
        <img
          src={image}
          alt='Tasarlayın ve Rezerve Edin.'
          height='542'
          width='1504'
        />
        <p className='font-light text-lg tracking-wider text-center my-2'>
          {title}
        </p>
      </div>
      <TransButton title={buttonText} />
    </div>
  );
};

export default IconCard;
