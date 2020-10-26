import React from 'react';

// components
import Navigation from '../components/layouts/Navigation';
import HomeHero from '../components/pageItems/home/hero';
// import PageCounter from '../components/index/PageCounter';

function HomePage() {
  return (
    <div className="container">
      <Navigation />
      <HomeHero />
      {/* <PageCounter numbers="5" /> */}
    </div>
  );
}

export default HomePage;
