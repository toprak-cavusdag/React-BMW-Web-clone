import React from 'react';

const TransButton = (props) => {
  return (
    <button
      className='py-5 px-5  rounded tracking-wider font-semibold text-black text-sm  border w-[200px] mt-3 duration-150 hover:-translate-y-1'
      type='button'
    >
      {props.title}
    </button>
  );
};

export default TransButton;
