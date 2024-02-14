import React from 'react';
import { styled } from 'styled-components';
import boys from '../Assets/boys.png';
import mobile from '../Assets/mobile.svg';
import { Button } from '@chakra-ui/react';

const Refer = () => {
    return (
        <DIV>
            <div className='leftPart'>
                <p>Refer & Earn Now</p>
                <p>Get a ₹500 Big Basket gift card</p>
                <Button>REFER AND EARN</Button>
                <p>Terms and Conditions apply</p>
            </div>
            <div className='imageDIV'>
                <img src={mobile} alt="" />
                <img style={{width:"500px"}} src={boys} alt="" />
            </div>
        </DIV>
    );
};

export default Refer;

const DIV = styled.div`
    height: 440px;
    /* border: 1px solid gray; */
    display: flex;
    align-items: center;
    gap: 300px;
    padding: 50px 80px;
    margin-top: 50px;
    .leftPart{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .leftPart>p:nth-child(1){
       font-size: 40px;
       font-weight: bold;
       margin-bottom: 5px;
    }
    .leftPart>p:nth-child(2){
       font-size: 22px;
    }
    .leftPart button{
        width: 274px;
        height: 56px;
        background-color: #8800EC;
        color: white;
    }
    .leftPart button:active{
        background-color: #a33bed;
    }
    .leftPart>p:nth-child(4){
       font-size: 16px;
       text-decoration: underline;
       cursor: pointer;
    }
    .imageDIV{
       position: relative;
       display: flex;
       flex-direction: column;
       align-items: flex-end;
       /* border: 1px solid gray; */
    }
    .imageDIV img:nth-child(1){
        
    }
    .imageDIV img:nth-child(2){  
        position: absolute;
        bottom: 0px;
        z-index: 1;
        height: 70%;
        /* border: 1px solid black; */
    }


    @media all and (max-width:1011px) {
        flex-direction: column;
        gap: 20px;
        height: fit-content;
        .leftPart>p:nth-child(1){
            font-size: 35px;
        }
        .leftPart>p:nth-child(2){
          font-size: 19px;
       }
       .leftPart button{
        width: 200px;
        height: 40px;
        font-size: 15px;
        align-self: center;
        background-color: #8800EC;
        color: white;
       }
        .imageDIV {
          display: none;
        }
        .leftPart>p:nth-child(4){
            align-self: center;
        }
    }

    @media all and (max-width:460px){
        .leftPart>p:nth-child(1){
            font-size: 30px;
        }
    } 
`