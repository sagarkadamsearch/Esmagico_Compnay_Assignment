import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'


  import React from 'react';
  
  const AmountSlider = ({handleSliderChange,value}) => {
    return (
        <Slider width='98%' aria-label='slider-ex-4' defaultValue={value} onChange={handleSliderChange} min={1000} max={1000000}  >
          <SliderTrack borderRadius={10} bg='#CECECE' height={2}>
             <SliderFilledTrack bg='#8800EC' />
          </SliderTrack>
          <SliderThumb boxSize={4} bg='#FF0096'>
          </SliderThumb>
        </Slider>
    );
  };
  
  export default AmountSlider;
  