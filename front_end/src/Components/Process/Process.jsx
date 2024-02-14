import React, { useState } from 'react';
import { styled } from 'styled-components';
import Eligibility_icon from '../Assets/Eligibility_icon.svg';
import Eligibility_icon1 from '../Assets/Eligibility_icon1.svg';
import apply_icon from '../Assets/apply_icon.svg';
import apply_icon1 from '../Assets/apply_icon1.svg';
import Documentation from '../Assets/Documentation.svg';
import Documentation1 from '../Assets/Documentation1.svg';
import Donation from '../Assets/Donation.svg';
import Donation1 from '../Assets/Donation1.svg';
import star1 from '../Assets/star1.svg';
import LoanStudy from '../Assets/LoanStudy.svg';
import loanStudy from '../Assets/LoanStudy.svg'
const Process = () => {
    const [activeTab, setActiveTab] = useState(1);

  return (
    <DIV>
      <div className='firstDiv'>
        <div className={`${activeTab === 1 ? 'active' : ''}`+' firstDiv-innerDiv'} onClick={() => setActiveTab(1)}>
            <img src={activeTab==1?Eligibility_icon1:Eligibility_icon} alt="" />
            <p>Eligibility</p>
        </div>
        <div className={`${activeTab === 2 ? 'active' : ''}`+' firstDiv-innerDiv'} onClick={() => setActiveTab(2)}>
            <img src={activeTab==2?apply_icon1:apply_icon} alt="" />
            <p>How to apply</p>
        </div>
        <div className={`${activeTab === 3 ? 'active' : ''}`+' firstDiv-innerDiv'} onClick={() => setActiveTab(3)}>
            <img src={activeTab==3?Documentation1:Documentation} alt="" />
            <p>Documentation</p>
        </div>
        <div className={`${activeTab === 4 ? 'active' : ''}`+' firstDiv-innerDiv'} onClick={() => setActiveTab(4)}>
            <img src={activeTab==4?Donation1:Donation} alt="" />
            <p>Fees & Charges</p>
        </div>
      </div>
      {
        activeTab==1
        ?
            <div className='secondDiv loan-part-home-page-info-real'>
              <div className='secondDiv-first'>
                 <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Citizenship Proof</p>
                    </div>
                    <p className='infoTag'>Indian citizen with valid ID proof</p>
                  </div>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Age</p>
                    </div>
                    <p className='infoTag'>23 to 58 years of age</p>
                  </div>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Lorem</p>
                    </div>
                    <p className='infoTag'>Lorem ipsum</p>
                  </div>
                  <div>     
                    <div>
                      <img src={star1} alt="" />
                      <p>Ipsum</p>
                    </div>
                    <p className='infoTag'>Ipsum lorem</p>
                </div> 
              </div> 
              <div className='secondDiv-second'>
                <img src={loanStudy} alt="" /> 
              </div>    
            </div>
        :
        <div className='secondDiv'>

        </div>
      }
    </DIV>
  );
};

export default Process;

const DIV = styled.div`
  padding-top: 94px;
  padding-left: 40px;
  padding-right: 40px;

  .firstDiv {
    height: 79px;
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .firstDiv-innerDiv {
    height: 100%;
    width: 25%;
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent; /* Initially transparent border */
    cursor: pointer;
    font-size: clamp(22px,1vw,26px);
    font-weight: bold;
  }
 
  .firstDiv-innerDiv.active {
    border-color: #DCDCDC; /* Border color for active tab */
    border-bottom: none; /* Remove bottom border */
    background-color: white;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    color: #8800EC;
  }

  .secondDiv {
    height: 556px;
    border: 1px solid #DCDCDC;
    margin-top: -1.1px; /* Overlapping with the active tab's border */
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 65px;
    display: flex;
    justify-content: space-between;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    }

 .secondDiv-first{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
    gap: 49px;
 }
 .loan-part-home-page-info-real>div>div>div{
   display: flex;
   align-items: center;
   gap: 12px;
 }
 .infoTag{
    padding-left: 32px;
    padding-right: 32px;
    color: #777479;
    font-size: 20px;
 }
 .loan-part-home-page-info-real div>div>p{
    color: #2A2A2A;
    font-size: 22px;
    font-weight: 600;
 }  
 .secondDiv-second{
    margin-right: 107px;
 }


 @media all and (max-width: 1165px) {
    .firstDiv{
        width: 95%;
    }
    .firstDiv-innerDiv {
      font-size: 22px;
    }
    .secondDiv-first .infoTag{
      font-size: 18px;
    }
    .secondDiv-first>div>div>p{
        font-size: 20px;
    }
    .secondDiv-second img{
       width: 300px;
       height: 320px;
    }
    
 }

 @media all and (max-width: 1028px) {
    .firstDiv{
        width: 95%;
    }
    .firstDiv-innerDiv {
      font-size: 20px;
    }
    .secondDiv-first .infoTag{
      font-size: 16px;
    }
    .secondDiv-first>div>div>p{
        font-size: 18px;
    }
    .secondDiv-second img{
       width: 250px;
       height: 270px;
    }
    .secondDiv{
        height: 500px;
    }
 }

 @media all and (max-width: 945px){
      display: none;
 }
`;
