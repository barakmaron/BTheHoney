import React from 'react';

import '../css/WeAreBlock.scss';

const WeAreBlock = () => {
  return (
    <>
    <div className='text_block'>
      <h2>Who are we?</h2>
      <div className='spacer'></div>
      <h3>B The Honey</h3>
      <div className='text_block_text'>
        <p>
          Israeli honey factory based in the golan hights.
          <br></br>
          we are the largest manufacture of 100% pure honey in the north of israel,
          <br></br>
          By being able to process 90 tons a week of the finniest and richest honey from the best farmers in israel,
          <br></br>
          placed as between the top brands in the honey industry.
          <br></br>
          Our finniest products is sold all around the world.
        </p>
      </div>
    </div>
    <div className='process_block'>
      <div>flower</div>
      <span>&#8594;</span>
      <div>bee</div>
      <span>&#8594;</span>
      <div>farmers</div>
      <span>&#8594;</span>
      <div>B The Honey control check</div>
      <span>&#8594;</span>
      <div>cleaned and sterilized</div>
      <span>&#8594;</span>
      <div>packaged</div>
      <span>&#8594;</span>
      <div>shipping</div>
    </div>
    </>
  )
}

export default WeAreBlock
