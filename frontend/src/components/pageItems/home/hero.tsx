import React from 'react';

import PageCounter from '../../index/PageCounter';
import Rheimer from '../../../assets/Me.svg';

//data-aos="fade-up" data-aos-delay="500" data-aos-duration="500"
function HomeHero() {
  return (
    <div className="homeHero">
      <div className="backgroundImage">
        <img src={Rheimer} alt="" />
      </div>
      <div className="left" data-aos="fade-right" data-aos-delay="300">
        <div className="inner">
          <div className="title">
            <p>Hello!</p>
          </div>
          <div className="text">
            <p>
              I’m Rheimer, a <span className="colored">developer</span> and <br /> trying to be a{' '}
              <span className="colored">designer.</span>
            </p>
          </div>
          <div className="readmoreButton">
            <div className="lines">
              <div className="long"></div>
              <div className="short"></div>
            </div>
            <button>About me</button>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default HomeHero;
