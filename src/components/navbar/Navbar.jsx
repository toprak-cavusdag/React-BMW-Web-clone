import React from 'react';
import logo from '../../asset/BMW_White_Logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

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
    <nav className='py-5 px-2 container mx-auto flex justify-between  items-center absolute z-50 top-0'>
      <div className='flex space-x-8'>
        <img src={logo} alt='Hero Image' className='h-16' />
        <ul className='flex space-x-8 items-center'>
          {NavbarMenus.map((menu) => {
            return (
              <li
                key={menu.id}
                className='text-white font-semibold group relative cursor-pointer'
              >
                {menu.name}

                <div className='w-full  absolute h-1 group-hover:bg-bmwBlue group-hover:translate-y-9'></div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='w-full absolute h-[1px] bg-white bottom-0'></div>

      <div className='flex'>
        <ul className='space-x-8 flex justify-center items-center'>
          <li className='text-white font-semibold group relative cursor-pointer'>
            <LocationOnIcon />
            <div className='w-full  absolute h-1 group-hover:bg-bmwBlue  group-hover:translate-y-9'></div>
          </li>

          <li className='text-white font-semibold group relative cursor-pointer'>
            <SearchIcon />
            <div className='w-full  absolute h-1 group-hover:bg-bmwBlue  group-hover:translate-y-9'></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
