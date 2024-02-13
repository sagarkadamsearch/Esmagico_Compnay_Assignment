import React from 'react';
import { styled } from 'styled-components';


const HeroOfferCard = (props) => {
    return (
        <DIV className="hero-offer-card">
            <img src={props.logo} alt="" />
            <div className="hero-offer-card-text">
                <p>{props.text1}</p>
                <p>{props.text2}</p>
            </div>
        </DIV>
    );
};

export default HeroOfferCard;

const DIV = styled.div`
    display: flex;
    gap: 17px;
    align-items: center;
    height: 60px;

    img{
        width: 60px;
        height: 100%;
    }
    .hero-offer-card-text p{
        font-size: 22;
    }
    .hero-offer-card-text p:nth-child(1){
       font-weight: bold;
       align-self: flex-start;
    }
`