import styled from '@emotion/styled';
import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import { RxCross1 } from "react-icons/rx";

const Menus = ({isActive,handleMenu}) => {
const [activeLink,setActiveLink] = useState('offers');

    return (
        <DIV style={{display:isActive?'block':'none'}}>
            <div className='cross'>
              <RxCross1 size={25} onClick={()=>handleMenu()}/>
            </div>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <hr />
            <div className="navbar-links">
                <ul>
                  <li className={activeLink=='offers'?'active':""} onClick={()=>setActiveLink('offers')}>Offers</li>
                  <li className={activeLink=='stories'?'active':""}  onClick={()=>setActiveLink('stories')}>Stories</li>
                  <li className={activeLink=='tata_pay'?'active':""}  onClick={()=>setActiveLink('tata_pay')}>Tata pay</li>
                  <li className={activeLink=='neupass'?'active':""} onClick={()=>setActiveLink('neupass')}>NeuPass</li>
                </ul>
            </div>
            <hr />
            <div className="navbar-links otherOptions">
                <ul>
                  <li className={activeLink=='cart'?'active':""} onClick={()=>setActiveLink('cart')}>Cart</li>
                  <li className={activeLink=='notify'?'active':""}  onClick={()=>setActiveLink('notify')}>Notifications</li>
                  <li className={activeLink=='profile'?'active':""}  onClick={()=>setActiveLink('profile')}>Profile</li>
                </ul>
            </div>
        </DIV>
    );
};

export default Menus;

const DIV = styled.div`
    width: 100%;
    position: relative;
    width: 100vw;
    background: white;
    font-weight: 600;
    top: -90px;
    z-index: 1000;
    
    .cross{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 20px;
        margin-top: 20px;
    }
    .logo{
        display: flex;
        justify-content: flex-start;
    }
    .logo img{
        width: 100px;
        margin-top: 20px;
        margin-left: 30px;
    }
    .navbar-links ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0px;
        margin-top: 30px;
    }
    .navbar-links ul li{
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        color: rgb(75 85 99);
        padding-left: 30px;
        font-size: 18px;
    }
    .navbar-links ul li.active{
        color:rgb(67 56 202);
        background-color:rgb(238 242 255);
        border-color: #483285;
        border-left:4px solid;
        padding-left: 26px;
    }
    .navbar-links ul li:hover{
        color:rgb(67 56 202);
        background-color:rgb(238 242 255);
        border-color: #483285;
        border-left:4px solid;
        padding-left: 26px;
    }
 
    hr{
        width: 98%;
        margin: auto;
        border-radius: 10px;
        margin-top: 10px;
        border: 0.5px solid #ddd;
        display: none;
    }
    .otherOptions{
        display: none;
    }


    @media all and (max-width: 660px){
      hr{
        display: block;
      }
      .otherOptions{
        display: block;
      }
    }       
`