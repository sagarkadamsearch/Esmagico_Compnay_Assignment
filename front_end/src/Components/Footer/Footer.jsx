import React from 'react';
import { styled } from 'styled-components';
import Facebook_icon from '../Assets/Facebook.svg';
import Instagram_icon from '../Assets/Insta.svg';
import YouTube_icon from '../Assets/YouTube.svg';
import LinkedIn_icon from '../Assets/LinkedIn.svg';
import white_logo from '../Assets/white_logo.svg';

const Footer = () => {
    return (
        <DIV>
            <div className='footer-left-part'>
                <img src={white_logo} alt="" />
                <div className='footer-left-part-social-icons'>
                    <img src={Facebook_icon} alt="" />
                    <img src={Instagram_icon} alt="" />
                    <img src={YouTube_icon} alt="" />
                    <img src={LinkedIn_icon} alt="" />
                </div>
            </div>
            <div className='footer-right-part'>
                <div>
                    <div className='footer-right-part-heading'>
                      <p>Help & Support</p>
                    </div>
                    <div className='footer-right-part-tags'>
                      <p>Terms & Service</p>
                      <p>Privacy Policy</p>
                      <p>FAQ</p>
                    </div>
                </div>
                
                <div>
                    <div className='footer-right-part-heading'>
                      <p>Customer Care</p>
                    </div>
                    <div className='footer-right-part-tags'>
                      <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                      <p>987654321</p>
                      <p>Tataneu Email ID</p>
                    </div>
                </div>
            </div>
            <div className='tags'>
                    <img src={Facebook_icon} alt="" />
                    <img src={Instagram_icon} alt="" />
                    <img src={YouTube_icon} alt="" />
                    <img src={LinkedIn_icon} alt="" />
            </div>
        </DIV>
    );
};

export default Footer;


const DIV = styled.div`
 background: #212121;
 margin-top: 52px;
 padding: 50px 80px;
 /* border: 1px solid red; */
 color: #FFFFFF;
 display: flex;
 justify-content: space-between;
 .tags{
    display: none;
 }
 .footer-left-part{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /* border: 1px solid white; */
    width: fit-content;
 }
 .footer-left-part-social-icons{
        display: flex;
        gap: 24px;
 }
 .footer-right-part{
        display: flex;
        /* border: 2px solid gray; */
        font-size: 14px;
        text-align: left;
        gap:108px;
 }
 .footer-right-part>div{
   display: flex;
   flex-direction: column;
   gap: 20px;
 }
 .footer-right-part-heading{
    font-size: 18px;
    font-weight: bold;
 }
 .footer-right-part-tags{
    display: flex;
    flex-direction: column;
    gap: 15px;
 }
 
 @media all and (max-width:900px) {
    .footer-right-part{
        font-size: 12px;
        gap: 20px;
    }
    .footer-right-part-heading{
    font-size: 14px;
    }
 }

 @media all and (max-width:767px){
    flex-direction: column;
    gap: 30px;
    padding: 30px 30px;
    padding-left:60px;
    
    .footer-left-part-social-icons{
        gap: 7px;
    }
    .footer-left-part-social-icons{
        display: none;
    }
    .tags{
        display: flex;
        gap: 20px;
    }
 } 

 @media all and (max-width:460px){
    .footer-right-part{
        font-size: 10px;
    }
    .footer-right-part-heading{
    font-size: 12px;
    }
 }
`