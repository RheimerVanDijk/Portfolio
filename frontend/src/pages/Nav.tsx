import React, { useState } from 'react';

import { useStoreState } from 'easy-peasy';

import Rheimer from '../assets/Me.svg';

import scrollToItem from '../components/tools/scrollToItem';

import history from '../history';

function NavPage() {
  const widthButton = parseInt(((window.innerWidth / 100) * 30).toFixed(10));
  const heightButton = parseInt(((window.innerHeight / 100) * 30).toFixed(10));

  const rheimerdia = (827 / 100) * 30;

  const padding = parseInt((window.innerWidth / 20 + widthButton).toFixed(10));

  const lastPage = parseInt(useStoreState((state: any) => state.lastPageNumber));

  const [display, setDisplay] = useState(false);

  setTimeout(() => {
    scrollToItem(lastPage, 'auto');
    // setDisplay(true);
  }, 1);

  function openPage(id: number) {
    scrollToItem(id, 'smooth');

    setTimeout(() => {
      document.querySelector(`#page${id}`)?.classList.add('openGame');
      document.querySelector('.hamburger')?.classList.remove('is-active');
    }, 300);

    setTimeout(() => {
      switch (id) {
        case 1:
          history.push('/');
          break;
        case 2:
          history.push('/skills');
          break;
      }
    }, 500);
  }

  return (
    <div className="navPageContainer">
      <div className="inner" style={{ paddingLeft: padding, paddingRight: padding }}>
        <div
          className="navigationButton"
          id="page1"
          style={{ width: widthButton, height: heightButton, background: '#101319' }}
          onClick={() => openPage(1)}
        >
          <img src={Rheimer} className="homePageImage" alt="" style={{ width: rheimerdia }} />
        </div>
        <div
          className="navigationButton"
          id="page2"
          style={{ width: widthButton, height: heightButton, background: '#101319' }}
          onClick={() => openPage(2)}
        >
          <img src={Rheimer} className="homePageImage" alt="" style={{ width: rheimerdia }} />
        </div>
        <div
          className="navigationButton"
          id="page3"
          style={{ width: widthButton, height: heightButton, background: 'yellow' }}
        ></div>
        <div
          className="navigationButton"
          id="page4"
          style={{ width: widthButton, height: heightButton, background: 'purple' }}
        ></div>
        <div
          className="navigationButton"
          id="page5"
          style={{ width: widthButton, height: heightButton, background: 'white' }}
        ></div>
      </div>
    </div>
  );
}

export default NavPage;
