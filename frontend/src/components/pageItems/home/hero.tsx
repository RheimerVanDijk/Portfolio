import React from 'react';

import PageCounter from '../../index/PageCounter';
import Rheimer from '../../../assets/Me.svg';

function HomeHero() {
  const helloMessages = ['Hi there!', 'Hello!', 'Heyyyy!', 'Helloooww!'];
  const msg = helloMessages[Math.floor(Math.random() * helloMessages.length)];

  let randomHelloMessage = <p>{msg}</p>;

  return (
    <div className="homeHero">
      <div className="backgroundImage">
        <img src={Rheimer} alt="" />
      </div>
      <div className="left">
        <div className="inner">
          <div className="title">{randomHelloMessage}</div>
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
      <div className="right">
        <PageCounter numbers="2" />
      </div>
    </div>
  );
}

export default HomeHero;
