import React from 'react';

const BlueButton = ({ title }) => {
  return (
    <button
      className='py-5 px-10 rounded font-semibold text-white bg-bmwBlue w-[250px] mt-2 duration-300 hover:-translate-y-1'
      type='button'
    >
      {title}
    </button>
  );
};

export default BlueButton;
