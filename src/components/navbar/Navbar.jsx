import React from 'react';
import logo from '../../asset/BMW_White_Logo.png';

const Navbar = () => {
  const NavbarMenus = [
    {
      id: 1,
      name: 'Modeller',
    },

    {
      id: 2,
      name: '%100 Elektrikli Modeller',
    },

    {
      id: 3,
      name: 'Tasarlayın ve Rezerve Edin',
    },

    {
      id: 4,
      name: 'Online Hizmetler',
    },
    {
      id: 5,
      name: "BMW'yi Keşfedin",
    },
  ];

  return (
    <nav className='py-5 px-2 container mx-auto flex justify-between  absolute z-50 top-0'>
      <div className='w-full absolute h-1 bg-gra'>
        <div className='flex space-x-8'>
          <img src={logo} alt='Hero Image' className='h-16' />
          <ul className='flex space-x-8 items-center'>
            {NavbarMenus.map((menu) => {
              return (
                <li key={menu.id} className='text-white font-semibold'>
                  {menu.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
