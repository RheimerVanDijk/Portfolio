import React from 'react';

// components
import HomeHero from '../components/pageItems/home/hero';
import AboutMe from '../components/pageItems/home/aboutMe';
import PageCounter from '../components/index/PageCounter';

function HomePage() {
  return (
    <div className="container" id="homePage">
      <HomeHero />
      <AboutMe />
      <PageCounter numbers="2" />
    </div>
  );
}

export default HomePage;
