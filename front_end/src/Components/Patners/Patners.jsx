import React from 'react';
import { styled } from 'styled-components';
import HDFC_Bank from '../Assets/HDFC_Bank.svg';
import ICICI_Bank from '../Assets/ICICI_Bank.svg';
import Bank_of_Badoda from '../Assets/Bank_of_Badoda.svg';
import ParterCard from './ParterCard';

const Patners = () => {
    return (
        <DIV data-aos="zoom-in">
            <p>Our Partners</p>
            <div className="all-partner-cards">
                <ParterCard logo={HDFC_Bank} name={'HDFC Bank'}/>
                <ParterCard logo={ICICI_Bank} name={'ICICI Bank'}/>
                <ParterCard logo={ICICI_Bank} name={'ICICI Bank'}/>
                <ParterCard logo={Bank_of_Badoda} name={'Bank of Baroda'}/>
            </div>
        </DIV>
    );
};

export default Patners;

const DIV = styled.div`
    background-color: #F8F9FA;  
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    /* grid-template-columns: 0.5fr 1fr; */
    align-items: center;
    padding-left: 100px;
    padding-right: 50px;
    font-size: 38px;
    font-weight: bold;
    padding-top: 80px;
    padding-bottom: 80px;

    .all-partner-cards{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        align-items: center;
        gap: 70px;
    }

    @media all and (max-width: 1372px){
            font-size:34px;
            align-items: center;
            .all-partner-cards{
                gap: 30px;
            }
        }
    @media all and (max-width: 1235px){
                 flex-direction: column;
            gap: 30px;
    }
        @media all and (max-width: 970px){
            font-size: clamp(25px,10vw,30px);
 
        }

        @media all and (max-width: 884px){
            .all-partner-cards{
                grid-template-columns: repeat(2,1fr);
            }
        }

        @media all and (max-width: 420px){
            .all-partner-cards{
                grid-template-columns: repeat(1,1fr);
                gap: 40px;
            }
        }
`