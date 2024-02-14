import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'


  import React from 'react';
  
  const PercentSlider = ({handleSliderChange}) => {
    return (
        <Slider step={0.2} width='98%' aria-label='slider-ex-4' defaultValue={9} onChange={handleSliderChange} min={1} max={100}  >
          <SliderTrack borderRadius={10} bg='#CECECE' height={2}>
             <SliderFilledTrack bg='#8800EC' />
          </SliderTrack>
          <SliderThumb boxSize={4} bg='#FF0096'>
          </SliderThumb>
        </Slider>
    );
  };
  
  export default PercentSlider;
  