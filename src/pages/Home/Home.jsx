import React from 'react';
import Hero from '../../components/hero/Hero';
import Reservation from '../../components/reservation/Reservation';
import ImageSection from '../../components/imageSection/ImageSection';
import carBackgrounds from '../../asset/yuzde-yuz-elektrikli-surus-keyfi--main-banner-2560x852-1_3to1.webp';
import joyBlog from '../../asset/JoyBlog.webp';

const Home = () => {
  return (
    <div>
      <Hero />
      <Reservation />
      <ImageSection
        title='tamamen elektrikli bmw modelleri.'
        image={carBackgrounds}
        desc='%100 elektrikli sürüş keyfi.'
        btn='Modelleri keşfedin'
      />

      <ImageSection
        title='bmw joy blog'
        image={joyBlog}
        desc=' BMW dünyasından en son gelişmeler, ilham veren yazılar ve çok daha fazlası. '
        btn='Keşfedin'
      />
    </div>
  );
};

export default Home;
