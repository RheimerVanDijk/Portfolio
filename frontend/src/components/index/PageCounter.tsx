import React, { useState } from 'react';
import ScrollToPage from '../tools/scroller';

function PageCounter(props: any) {
  const [count, setCount] = useState(1);
  const numbers = props.numbers;

  let currentNum = 1;
  let blocks = [];

  function selectBlock(id: number) {
    document.querySelectorAll('.block').forEach((element) => {
      element.classList.remove('active');
    });

    if (!document.querySelectorAll('.block')[id].classList.contains('active')) {
      document.querySelectorAll('.block')[id].classList.add('active');
      setCount(id + 1);
      ScrollToPage(id);
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
    <div className="pageCounter" data-aos="fade-left" data-aos-delay="300">
      <div className="number">
        <p>{count}</p>
      </div>
      <div className="blocks">{blocks}</div>
    </div>
  );
}

export default PageCounter;
