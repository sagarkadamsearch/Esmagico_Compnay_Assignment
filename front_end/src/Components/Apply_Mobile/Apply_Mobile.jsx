import React from 'react';
import { styled } from 'styled-components';
import Mobile_icon  from '../Assets/Mobile_icon.svg';
import Thunder from '../Assets/Thunder.svg';
import line from '../Assets/line.svg';
import { Button } from '@chakra-ui/react';

const Apply_Mobile = () => {
    return (
        <DIV>
            <div className='apply-mobile-left'>
                <img src={Mobile_icon} alt="" />
            </div>
            <div className='apply-mobile-right'>
                <div className='apply-mobile-right-heading'>
                    <img src={Thunder} alt="" />
                    <p>Lightning Fast Process</p>
                </div>
                <div className='line'>
                    <img src={line} alt="" />
                </div>
                <div className='customer_details'>
                    <p>Customer Share Basic Details</p>
                </div>
                <div className='buttonDIV'>
                <Button  zIndex="1" w={274} pt={7} pb={7} mt={10} color='white' bg='#8800EC' fontWeight='normal'>APPLY NOW</Button>
                </div>
            </div>
        </DIV>
    );
};

export default Apply_Mobile;

const DIV = styled.div`
    height: 700;
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    div{
        flex: 1;
    }
  
    .apply-mobile-right{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        gap: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .apply-mobile-right-heading{
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 40px;
        font-weight: bold;
        color: #2A2A2A;
    }
    .customer_details{
        font-size: 23px;
        color: #2A2A2A; 
    }
    button{
        margin: 0px;
    }

    @media all and (max-width:974px) {
        .apply-mobile-right{
            gap: 15px;
        }
        .apply-mobile-right-heading{
            font-size: 30px;
        }
        .customer_details{
            font-size: 19px;
        }
        button{
            width: 120px;
            padding: 20px;
            margin: 0px;
            z-index: 0;
        }
    }

    @media all and (max-width:767px){
        flex-direction: column;

        .apply-mobile-right-heading{
            font-size: 25px;
        }
        .customer_details{
            font-size: 17px;
        }
        .apply-mobile-left img{
            width: 70%;
            margin: auto;
        }
        .line{
            width: 80%;
        }
        button{
            font-size: 15px;
        }
    }
`