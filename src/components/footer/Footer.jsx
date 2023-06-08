import React from 'react';

import FooterBottom from './footerBottom/FooterBottom';
import FooterTopList from './footerTop/FooterTopList';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const list1 = [
    {
      id: 1,
      title: 'BMW Canlı Destek',
    },

    {
      id: 2,
      title: 'BMW Acil Yol Yardım Hattı',
    },

    {
      id: 3,
      title: 'İletişim',
    },
    {
      id: 4,
      title: 'Geri Dönüşüm',
    },

    {
      id: 5,
      title: 'Gönüllü Geri Çağırma',
    },

    {
      id: 6,
      title: 'BMW E-Bülteni',
    },
  ];

  const list2 = [
    {
      id: 1,
      title: 'Fiyat Listesi',
    },

    {
      id: 2,
      title: 'BMW’ni Tasarla',
    },

    {
      id: 3,
      title: 'BMW Türkiye Mobil Uygulaması',
    },
    {
      id: 4,
      title: 'Test Sürüşü',
      icon: true,
    },

    {
      id: 5,
      title: 'Ayın Özel Teklifleri',
    },

    {
      id: 6,
      title: 'Kataloglar',
    },

    {
      id: 6,
      title: 'Site Haritası',
    },
  ];

  const list3 = [
    {
      id: 1,
      title: 'BMW Türkiye Mobil Uygulaması',
    },

    {
      id: 2,
      title: "BMW'ni Bul",
      icon: true,
    },

    {
      id: 3,
      title: 'BMW Dilediğiniz Yerde',
      icon: true,
    },
    {
      id: 4,
      title: 'My BMW',
      icon: true,
    },

    {
      id: 5,
      title: 'BMW Lifestyle Shop',
      icon: true,
    },

    {
      id: 6,
      title: 'BMW Motorrad Türkiye',
      icon: true,
    },

    {
      id: 6,
      title: 'Borusan Otomotiv',
      icon: true,
    },
  ];
  return (
    <footer className='w-full flex flex-col items-center '>
      <div className='flex flex-col items-center w-full h-full bg-gray-100'>
        <div className='container mx-auto flex flex-row items-center w-full h-full'>
          <FooterTopList title='İLETİŞİM & DESTEK' lists={list1} />
          <FooterTopList title='HIZLI ERİŞİM' lists={list2} />
          <FooterTopList title='BMW DÜNYASI' lists={list3} />
        </div>
        <div className='w-full flex flex-row justify-start items-center  space-x-3 text-gray-700  container mx-auto pt-10 pb-5'>
          <a href='https://www.youtube.com/channel/UCj66X-fJeHopzXoaR8dS2cQ'>
            <YouTubeIcon />
          </a>

          <a href='https://www.youtube.com/channel/UCj66X-fJeHopzXoaR8dS2cQ'>
            <FacebookIcon />
          </a>

          <a href='https://www.instagram.com/toprakcavusdag.js/'>
            <InstagramIcon />
          </a>

          <a href='https://www.youtube.com/channel/UCj66X-fJeHopzXoaR8dS2cQ'>
            <TwitterIcon />
          </a>

          <a href='linkedin.com/in/toprak-çavuşdağ-5184aa208'>
            <LinkedInIcon />
          </a>

          <span className='text-xs tracking-widest'>
            Designed by Toprak ÇAVUŞDAĞ
          </span>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
