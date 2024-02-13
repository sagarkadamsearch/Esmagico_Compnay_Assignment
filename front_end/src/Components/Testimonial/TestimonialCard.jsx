import React from 'react';
import { styled } from 'styled-components';
import testimonialIcon from '../Assets/testimonial_icon.svg';
import line2 from '../Assets/line2.svg';

const TestimonialCard = () => {
    return (
        <DIV className='testimonial-card'>
            <p>Sunil GUPTA</p>
            <p>Chartered Accountant</p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. 
               Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet,
               consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, 
               id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut.
            </p>
            <div className='testimonial_icon'>
              <img src={testimonialIcon} alt="" />
            </div>
            <div className='testimonial-card-line'>
              <img src={line2} alt="" />
            </div>
        </DIV>
    );
};

export default TestimonialCard;

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 40%;
    gap: 10px;
    position: relative;
    padding-left: 80px;

  p:nth-child(1){
   font-size: 22px;
   font-weight: bold;
  } 
  p:nth-child(2){
   font-size: 17px;
   font-weight: bold;
  }   
  p:nth-child(3){
   font-size: 15px;
  }  
  .testimonial_icon{
    position: absolute;
    top: -40px;
    left: -30px;
  }
  .testimonial-card-line{
    margin-top: 10px;
  }

  @media all and (max-width:1078px) {
    width: 70%;
    .testimonial_icon{
     width: 60px;
     top: -20px;
     left: -10px;
  }
    }

  @media all and (max-width:645px){
    p:nth-child(3){
     font-size: 15px;
     height: 220px;
     /* border: 1px solid black; */
     overflow-y: auto;
    } 
    p:nth-child(3)::-webkit-scrollbar{
      width: 2px;
    }
    p:nth-child(3)::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
    }

    p:nth-child(3)::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
    }
`