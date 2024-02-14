import { Divider, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { styled } from 'styled-components';
import addition_minus from '../Assets/addition_minus.svg';
import AmountSlider from './AmountSlider';
import { Input } from '@chakra-ui/react'
import PercentSlider from './PercentSlider';
import TenureSlider from './TenureSlider';
import HalfCircleChart from './HalfCircleChart';





const EMI = () => {
    const [amount,setAmount] = useState(30000);
    const [percent,setPercent] = useState(1);
    const [tenure,setTenure] = useState(12);

    const rate = Number(percent)/100;
    const time = Number(tenure)/12;
    const totalInterest = (Number(amount)*Number(rate)*Number(time)).toFixed(0); 
    const totalAmountPayable = Number(amount)+Number(totalInterest);


    const handleSliderChange1 = (value)=>{
      setAmount(value);
    }
    const handleSliderChange2 = (value)=>{
        setPercent(value);
    }
    const handleSliderChange3 = (value)=>{
      setTenure(value);
    }

    return (
        <DIV>
            <div className='emi'>
               <div className='emi-heading'>
                  <img src={addition_minus} alt="" />
                  <p>EMI Calculator</p>
               </div>
               <div className='emi-main-div'>
                  <div className='emi-main-leftSidediv'>
                    <div className='emi-main-leftSidediv-sliderDiv'>
                       <p>Loan Amount</p>
                       <div className='sliderDIV'>
                       <InputGroup>
                          <InputLeftAddon fontSize={18} fontWeight='bold'>
                              &#x20B9;
                          </InputLeftAddon>
                          <Input type='number' value={amount} placeholder='Amount' />
                        </InputGroup>
                       <AmountSlider value={amount} handleSliderChange={handleSliderChange1}/>
                       </div>
                    </div>
                    <div className='emi-main-leftSidediv-sliderDiv'>
                       <p>Interest Rate (%)</p>
                       <div className='sliderDIV'>
                       <InputGroup>
                          <InputLeftAddon fontSize={18}>
                             %
                          </InputLeftAddon>
                          <Input type='number' value={percent} placeholder='Amount' />
                        </InputGroup>
                       <PercentSlider value={percent} handleSliderChange={handleSliderChange2}/>
                       </div>
                    </div>
                    <div className='emi-main-leftSidediv-sliderDiv'>
                       <p>Loan Tenure (In Months)</p>
                       <div className='sliderDIV'>
                       <InputGroup>
                          <InputLeftAddon fontSize={18} fontWeight='bold'>
                             Months
                          </InputLeftAddon>
                          <Input type='number' value={tenure} placeholder='Amount' />
                        </InputGroup>
                       <TenureSlider value={tenure} handleSliderChange={handleSliderChange3}/>
                       </div>
                    </div>
                  </div>
                  {/* EMI Right side chart div started */}
                  <div className="emi-main-rightSidediv">
                    <HalfCircleChart principalAmount={amount} interestAmount={totalInterest}/>
                    <div className='emi-main-rightSidediv-amount-section'>
                     <div className='emi-main-totals-section'> 
                       <div className='amountSection'>
                         <div className='amount'>
                            <div style={{width:'15px',height:"15px",backgroundColor:"#FF0096"}}/>
                            <p>Principal Amount</p>
                          </div> 
                       </div>
                       <div className='amountSection'>
                         <div className='amount'>
                            <div style={{width:'15px',height:"15px",backgroundColor:"#BFBFBF"}}/>
                            <p>Interest Amount</p>
                          </div>
                       </div>
                       <div className='amountSection'>
                         <div className='amount'>
                            <p>Total Amount Payable</p>
                          </div>
                       </div>
                      </div>

                      <div className='totals'>
                        <span> &#x20B9; {amount} </span>
                        <span> &#x20B9; {totalInterest} </span>
                        <span> &#x20B9; {totalAmountPayable} </span>
                      </div> 
                    </div>
                  </div>
               </div>
            </div>
        </DIV>
    );
};

export default EMI;

const DIV = styled.div`
  /* border: 1px solid black; */
  padding-top: 177px;
  padding-bottom: 73px;
  padding-left: 80px;
  padding-right: 80px;

  .emi{
    display: flex;
    flex-direction:column;
    gap: 42px;
  }
  .emi-heading{
    display: flex;
    align-items: center;
    font-size: 44px;
    font-weight: 600;
  }
  .emi-main-div{
    display: flex;
    gap:50px
  }
  .emi-main-leftSidediv{
    width: fit-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
    padding-bottom: 29px;
  }
  .emi-main-leftSidediv-sliderDiv{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
  }
  .emi-main-leftSidediv-sliderDiv>p{
    color: #A0A0A0;
    margin-bottom: 10px;
  }
  .sliderDIV{
    width: 358px;
  }

  .emi-main-rightSidediv-amount-section{
    display: flex;
  }
  .emi-main-rightSidediv{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding-left: 20px;
    padding-right: 40px;
    padding-bottom: 20px;
  }
  .emi-main-totals-section .amountSection:nth-child(3){
    margin-bottom: 0px;
  }
  .amountSection{
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
    margin-bottom: 28px;
    font-size: 20px;
    font-weight: 500;
  }
  .amount{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .totals{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 28px;
    margin-left: 30px;
    color: #8800EC;
    font-weight: bold;
    font-size: 20px;
  }


  @media all and (max-width:995px){
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
    padding-bottom: 29px;

    .emi{
      align-items: center;
    }

    .emi-main-rightSidediv{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .emi-main-div{
        display: flex;
        flex-direction: column;
        gap:50px
      }
  }
`