import React from 'react';
import { styled } from 'styled-components';
import Star from '../Assets/Star.svg';
import loan_part_image from '../Assets/loan-part-image.svg';
import star1 from '../Assets/star1.svg';

const LoanPartHomePage = () => {
    return (
        <DIV>
            <div className='loan-part-home-page-title'>
              <img src={Star} alt="" />
              <p>Personal Loan Highlights</p>
            </div>
            <div className='loan-part-home-page-info'>
               <img src={loan_part_image} alt="" />
               <div className='loan-part-home-page-info-real'>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Interest Rate</p>
                    </div>
                    <p className='infoTag'>Usually <span>10.49% p.a.</span> onwords: some PSUs may offer lower rates</p>
                  </div>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Loan Amount</p>
                    </div>
                    <p className='infoTag'>Can go up to <span>RS 40 lakh:</span> some lenders may offer higher loan amount  </p>
                  </div>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Processing Fees</p>
                    </div>
                    <p className='infoTag'><span>0.5% to 4%</span> of loan amount (may vary across lenders)  </p>
                  </div>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Tenure</p>
                    </div>
                    <p className='infoTag'>Up to <span>5 years</span> (some lenders offer repayment period till 8 year)  </p>
                  </div>     
               </div>
            </div>
        </DIV>
    );
};

export default LoanPartHomePage;


const DIV = styled.div`

 .loan-part-home-page-title{
    display: flex;
    align-items: center;
    gap:10px;
    padding-top: 50px;
 }
 .loan-part-home-page-title p{
    font-size: 44px;
    font-weight: bold;
 }
 .loan-part-home-page-title img{
    width: 50px;
    height: 50px;
    margin-left: 40px;
 }
 .loan-part-home-page-info{
    height: 544px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
 }
 .loan-part-home-page-info-real{
    background-color: #FCF8FF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
    padding-left: 50px;
    gap: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 15px;
 }
 .loan-part-home-page-info-real div>div{
   display: flex;
   align-items: center;
   gap: 10px;
 }
 .infoTag{
    padding-left: 32px;
    padding-right: 32px;
    color: #777479;
    font-size: 20px;
 }
 .infoTag span{
    color: #8800EC;
    font-weight: 600;
 }
 .loan-part-home-page-info-real div>div>p{
    color: #2A2A2A;
    font-size: 28px;
    font-weight: 600;
 }

 @media all and (max-width:1182px) {
    .loan-part-home-page-info>img{
        display: none;
    }
    .loan-part-home-page-title img{
        display: none;
    }
    .loan-part-home-page-title p{
        margin: auto;
        /* text-decoration: underline;
        text-underline-offset: 10px; */
        border-bottom: 4px solid black;
        border-radius:10px;
        
    }
 }

 @media all and (max-width:767px) {
    .loan-part-home-page-info-real div>div>p{
        font-size: clamp(23px,1vw,30px);
    }
    .infoTag{
        font-size: clamp(15px,3vw,17px);
    }
    .loan-part-home-page-info{
        margin-left: 30px;
        margin-right: 30px;
    }
    .loan-part-home-page-info-real div>p{
        text-align: left;
    }
    .loan-part-home-page-title p{
        font-size: clamp(20px,10vw,30px);
    }
    
 }
 
`