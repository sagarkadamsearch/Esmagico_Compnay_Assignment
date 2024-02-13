import styled from '@emotion/styled';
import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import SearchBar from './SearchBar';
import location from '../Assets/location.svg';
import Shop_Icon from '../Assets/Shop_Icon.svg';
import Bell_icon from '../Assets/Bell_icon.svg';
import Profile_icon from '../Assets/Profile_icon.svg';
import { AiOutlineMenu } from "react-icons/ai";
import Menus from './Menus';


const Navbar = () => {

    const [menuIsActive,setMenuIsActive] = useState(false);
    const handleMenu = ()=>{
      setMenuIsActive((prev)=>!prev);  
    }
    return (
        
        <DIV className='navbar'>
            <div className="navbar-left">
               <div className="navbar-left-logo">
                  <img src={Logo} width='60px' alt="" />
               </div>
               <div className="navbar-left-links">
                  <ul>
                    <li>Offers</li>
                    <li>Stories</li>
                    <li>Tata pay</li>
                    <li>NeuPass</li>
                  </ul>
               </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-searchbar">
                    <SearchBar/>
                </div>
                <div className="navbar-right-location">
                    122018 <img src={location} alt="" />
                </div>
                <div className="navbar-right-icons">
                    <img src={Shop_Icon} alt="" />
                    <img src={Bell_icon} alt="" />
                    <img src={Profile_icon} alt="" />
                </div>
                <div className="navbar-right-menuicon">
                    <AiOutlineMenu size={20} onClick={handleMenu}/>
                </div>
            </div>
            <div className='navbar-right-menu' style={{position:'fixed'}}>
               <Menus isActive={menuIsActive} handleMenu={handleMenu}/>
            </div>
        </DIV>
    );
};

export default Navbar;

const DIV = styled.div`
    width: 100%;
    /* border: 1px solid orange; */
    background: #FDFDFD;
    padding: 20px 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    color: #212121;

    .navbar-left{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .navbar-left-logo{
        cursor: pointer;
    }
    .navbar-left-links ul{
        display: flex;
        align-items: center;
        gap: 25px;
        list-style: none;
        /* border: 1px solid black; */
        font-weight: bold;
    }
    .navbar-left-links ul li{
      cursor: pointer;
    }

    //Navbar Right Part CSS
    .navbar-right{
        display: flex;
        gap: 25px;
    }
    .navbar-right-location{
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
    }
    .navbar-right-icons{
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .navbar-right-icons img{
        cursor: pointer;
    }
    .navbar-right-menuicon{
        display: none;
    }
    

    @media all and (max-width: 900px){
        .navbar-left-links{
            display: none;
        }
        .navbar-right-menuicon{
            display: block;
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .navbar-right-menuicon:active{
            background: gray;
        }
    }


     @media all and (max-width: 660px){
        .navbar-right-icons{
            display: none;
        }
    }
      
     @media all and (max-width: 550px){
        .navbar-right-location{
            display: none;
        }  
    }    
`