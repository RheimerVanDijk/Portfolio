import React, { useState } from 'react';

function PageCounter(props: any) {
  const numbers = props.numbers;

  let currentNum = 1;
  let blocks = [];

  function selectBlock(id: number) {
    document.querySelectorAll('.block').forEach((element) => {
      element.classList.remove('active');
    });

    if (!document.querySelectorAll('.block')[id].classList.contains('active')) {
      document.querySelectorAll('.block')[id].classList.add('active');
    }
  }

  for (let i = 0; i < numbers; i++) {
    blocks.push(
      <div
        className={i == 0 ? 'block active' : 'block'}
        onClick={() => selectBlock(i)}
        key={i}
      ></div>
    );
  }

  return (
    <div className="pageCounter">
      <div className="number">
        <p>{currentNum}</p>
      </div>
      <div className="blocks">{blocks}</div>
    </div>
  );
}

export default PageCounter;
