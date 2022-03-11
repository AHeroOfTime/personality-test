import React from 'react';
import Link from 'next/link';
import { Page } from '../components/Page';

const WhatIs = () => {
  return (
    <Page>
      {/* box */}
      <div className="box">
        {/* heading */}
        <h1 className="page-title -mt-16">What is the Enneagram?</h1>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            deleniti quasi unde facilis, fugiat distinctio corporis, blanditiis
            aliquid repellat laboriosam aspernatur recusandae quibusdam
            similique! Dolorem sint quod provident eligendi quis eaque cum at
            eos perspiciatis ipsum? Doloremque reiciendis consequatur asperiores
            iste praesentium facilis placeat neque architecto nam ullam, iure
            minus.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default WhatIs;
