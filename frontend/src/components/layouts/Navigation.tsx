import React from 'react';

import ScrollToPage from '../tools/scroller';
import scrollToItem from '../tools/scrollToItem';
import history from '../../history';

import { useStoreActions, useStoreState } from 'easy-peasy';

function Navigation() {
  let interval: NodeJS.Timeout;
  const setPageNumber = useStoreActions((actions: any) => actions.setPageNumber);
  const lastPage = parseInt(useStoreState((state: any) => state.lastPageNumber));

  function navigationCycle() {
    document.querySelector('.hamburger')?.classList.toggle('is-active');

    if (document.querySelector('.hamburger')?.classList.contains('is-active')) {
      ScrollToPage(0);
      interval = setInterval(checkIfPageTop, 1);
    }

    if (!document.querySelector('.hamburger')?.classList.contains('is-active')) {
      closeNavigation();
    }
  }

  function checkIfPageTop() {
    if (window.pageYOffset == 0) {
      navigationActivate();
    }
  }

  function navigationActivate() {
    clearInterval(interval);
    document.querySelector('#homePage')?.classList.add('activateNAV');

    setTimeout(() => {
      let location = window.location.pathname;

      switch (location) {
        case '/':
          setPageNumber(1);
          history.push('/nav');
          break;
        case '/skills':
          setPageNumber(2);
          history.push('/nav');
          break;
        default:
          history.push('/nav');
      }
    }, 300);
  }

  function closeNavigation() {
    document.querySelector('#homePage')?.classList.remove('activateNAV');

    scrollToItem(lastPage, 'smooth');

    setTimeout(() => {
      document.querySelector(`#page${lastPage}`)?.classList.add('openGame');
    }, 300);

    setTimeout(() => {
      history.push('/');
    }, 500);
  }

  return (
    <div className="nav">
      <div className="left">
        <p>Rheimer van Dijk</p>
      </div>
      <div className="right">
        <div className="hamburger hamburger--slider" onClick={navigationCycle}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
