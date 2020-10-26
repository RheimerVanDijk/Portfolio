import React from 'react';

function Navigation() {
  function navigationCycle() {
    document.querySelector('.hamburger')?.classList.toggle('is-active');
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
