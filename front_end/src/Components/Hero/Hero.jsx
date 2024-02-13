import React from 'react';
import { styled } from 'styled-components';
import HeroOfferCard from './HeroOfferCard';
import hero_offer_card1 from '../Assets/hero-offer-card1.svg';
import hero_offer_card2 from '../Assets/hero-offer-card2.svg';
import hero_offer_card3 from '../Assets/hero-offer-card3.svg';
import hero_offer_card4 from '../Assets/hero-offer-card4.svg';
import hero_image from '../Assets/hero_image.svg';
import { Button } from '@chakra-ui/react';

const Hero = () => {
    return (
        <DIV className='hero'>
            <div className='hero-left'>
              <div className="text">
                  <p>Turn Dream Into Reality</p>
                  <p>With <span>Personal Loans</span></p>
              </div>
              <div className='hero-left-offers'>
                <HeroOfferCard logo={hero_offer_card1} text1={'Avail Zero'} text2={'Processing Fee'}/>
                <HeroOfferCard logo={hero_offer_card2} text1={'Quick'} text2={'Personal Loan'}/>
                <HeroOfferCard logo={hero_offer_card3} text1={'Lowest'} text2={'Interest Rates'}/>
                <HeroOfferCard logo={hero_offer_card4} text1={'Miniamal'} text2={'Documentation'}/>
              </div>
              <Button w={168} pt={5} pb={5} mt={10} color='white' bg='#8800EC' fontWeight='normal'>APPLY NOW</Button>
            </div>  
            <div className='hero-right'>
                <img src={hero_image} alt="" />
            </div>
        </DIV>
    );
};

export default Hero;


const DIV = styled.div`
    display: flex;
    padding-left: 100px;
    padding-right: 50px;
    padding-top: 100px;
    height: fit-content;

    .hero-left{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        margin-top: 30px;
    }
    .hero-left .text p{
       font-size: 60px;
       font-weight: 500;
       color: #2A2A2A;
    }
    .hero-left .text span{
         color: #FF0096;
    }
    .hero-left-offers{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 30%;
        row-gap: 20px;
        margin-top: 30px;
    }
    .hero-right{
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    .hero-left-offers .button{
        background-color: 8800EC;
    }

    @media all and (max-width:1436px) {
        .hero-left .text p{
            font-size: 4.16vw;
        }
    }
    @media all and (max-width:767px) {
        align-items: center;
        justify-content: center;
        padding: 30px;

        .hero-left{
            flex: none;
            align-items: center;
        }
        .hero-left .text p{
            font-size: clamp(35px,4.16vw,60px);
        }
        .hero-right{
          display: none;
        }
    }

    @media all and (max-width:455px) {
        .hero-left-offers{
        grid-template-columns:1fr;
    }
    }
`