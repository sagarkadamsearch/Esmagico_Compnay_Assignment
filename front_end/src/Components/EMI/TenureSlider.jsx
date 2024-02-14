import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from '@chakra-ui/react'


  import React from 'react';
  
  const TenureSlider = ({handleSliderChange}) => {
    return (
        <Slider step={1} width='98%' aria-label='slider-ex-4' defaultValue={12} onChange={handleSliderChange} min={1} max={120}  >
          <SliderTrack borderRadius={10} bg='#CECECE' height={2}>
             <SliderFilledTrack bg='#8800EC' />
          </SliderTrack>
          <SliderThumb boxSize={4} bg='#FF0096'>
          </SliderThumb>
        </Slider>
    );
  };
  
  export default TenureSlider;
  