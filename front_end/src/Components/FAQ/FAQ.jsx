import React from 'react';
import { styled } from 'styled-components';
import {
    Accordion, Button,
  } from '@chakra-ui/react'
import AccordianItem from './AccordianItem';
import Question_Circle from '../Assets/Question_Circle.svg';


const arr = [
 {title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
 {title:'Lorem ipsum dolor sit amet'},
 {title:'Lorem ipsum dolor sit amet, consectetur'},
 {title:'Lorem ipsum dolor sit amet, consectetur'},
 {title:'Lorem ipsum dolor sit amet, consectetur adipiscing'},
 {title:'Lorem ipsum'},
 {title:'Lorem ipsum dolor sit'}
]

const AccordianArr = arr.map((e,index)=> <AccordianItem key={index} title={`${index+1}. ${e.title}`}/>)

const FAQ = () => {
    return (
        <DIV className='faq'>
            <div>
              <div className='faq-logo-and-title'>
                  <img src={Question_Circle} alt="" />
                  <p>FAQ'S</p>
              </div>
              <div >
                <Accordion allowMultiple className='faq-accordians'>
                  {AccordianArr}
                </Accordion>
              </div>
            </div>
            <div className='faq-doubt'>
               <p>Anything not clear?</p>
               <div className='faq-doubt-query-section'>
                  <p>You can see our detailed F&Q sessions if you have more quiries. Also we are always a single call away for all your special asks...</p>
                 <Button fontSize='16px' color='white' bg='#8800EC' pl='59px' pr='59px' height='56px' >CONTACT US</Button>
               </div>
            </div>
        </DIV>
    );
};

export default FAQ;

const DIV = styled.div`
    /* border: 1px solid black; */
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    color: #2A2A2A;
    margin-top: 20px;

    .faq-logo-and-title{
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        /* border: 1px solid black; */
        font-size: 44px;
        font-weight: bold;
        margin-bottom: 60px;
        padding-left: 5px;
    }
    .faq-logo-and-title img{
        width: 50px;
        height: 50px;
    }

    .faq-doubt{ 
      background-color: #F9F2FE;
      text-align: left;
      padding: 37px 50px;
    }
    .faq-doubt>p{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 9px;
    }
    .faq-doubt-query-section{
        display: flex;
        align-items: center;
        gap: 36px;

    }
    .faq-doubt-query-section>p{
        width: 75%;
        font-size: 18px;
        text-align: left;
        margin-top: 0px;
    }

    @media all and (max-width: 767px) {
        .faq-doubt-query-section{
            flex-direction: column;
        }
        .faq-doubt{
           text-align: center;
        }
        .faq-doubt-query-section p{
            width: 80%;
        }
    }
`