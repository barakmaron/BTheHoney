import React from 'react';
import Products from './Products';
import WeAreBlock from './WeAreBlock';

import '../css/Home.scss';

const Home = () => {
  return (
    <>
      <WeAreBlock></WeAreBlock>
        <Products></Products>
    </>
  )
}

export default Home
