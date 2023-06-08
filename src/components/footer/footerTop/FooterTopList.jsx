import React from 'react';

const FooterTopList = ({ title, lists }) => {
  return (
    <div className='py-10 bg-gray-100 w-full border-t-05 '>
      <ul className=' flex justify-center items-start flex-col'>
        <li className='my-3 font-light uppercase text-xs tracking-wider text-gray-600'>
          {title}
        </li>

        <li className='font-semibold tracking-wider text-gray-700 space-y-4  hover:text-black cursor-pointer'>
          {lists?.map((list) => {
            return (
              <div key={list.id}>
                {list.title} {list.icon == true && <span>&#8599;</span>}
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default FooterTopList;
