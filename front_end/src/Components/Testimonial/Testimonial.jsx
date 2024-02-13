import React from 'react';
import { styled } from 'styled-components';
import Hand_Heart from '../Assets/Hand_Heart.svg';
import Bussinessman from '../Assets/bussinessman.svg';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <DIV className='testimonial'>
            <div className="testimonial-title">
                <img src={Hand_Heart} alt="" />
                <p>What Our Customer Says</p>
            </div>
            <div className='testimonial-bussiness-img'>
                <div className='person'>
                   <img src={Bussinessman} alt="bussinessman" />
                </div>
                <TestimonialCard/>
            </div>
        </DIV>
    );
};

export default Testimonial;

const DIV = styled.div`
    background-color: #F8F9FA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 100px;
    .testimonial-title{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: bold;
    }

    .testimonial-bussiness-img {
    /* border: 1px solid black; */
    display: flex;  
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    }
    .testimonial-bussiness-img .person{
      /* border: 1px solid black; */
      align-self: flex-end;
    }

    @media all and (max-width:1078px) {
        .testimonial-bussiness-img{
            flex-direction: column;
            gap: 60px;
        }
        .testimonial-bussiness-img .person{
           align-self: center;
           width: 50%;
        }
    }

    @media all and (max-width:555px){
        .testimonial-title{
            font-size: 29px;
        }
    }
    
`