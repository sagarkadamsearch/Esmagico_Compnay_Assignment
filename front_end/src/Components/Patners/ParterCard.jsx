import React from 'react';
import { styled } from 'styled-components';

const ParterCard = (props) => {
    return (
        <DIV className='partner-card'>
            <img src={props.logo} alt="" />
            <p>{props.name}</p>
        </DIV>
    );
};

export default ParterCard;

const DIV = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 20px;
    height: 100px;
    /* border: 1px solid black; */
    img{
        height: 48px;
    }
   p{
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 0px;
   } 

   @media all and (max-width: 970px){
       p{
        font-size:20px ;
     }
    }
`