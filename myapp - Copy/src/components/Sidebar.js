import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { MyContext } from '../App';

const Sidebar = () => {
    const[isOpen,setIsOpen]=useState(false);
    const toggleDropdown=()=>{
        setIsOpen(!isOpen);
    };
    const context=useContext(MyContext);
    return (
        <div>
        <div className='sideBar'>
            <ul>
                <li>
                    <Button className='w-100'>
                        <span className='icon'><RxDashboard/></span>
                        Dashboard
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className="dropdown-button" onClick={toggleDropdown}>
                        {isOpen?'':''}
                        <span className='icon'><MdProductionQuantityLimits/></span>
                        Product
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                    {isOpen &&(
                    <div className='submenuWrapper'>
                    <ul className='submenu'>
                        <li><Link to='#'>Product List</Link></li>
                        <li><Link to='#'>Product view</Link></li>
                        <li><Link to='#'>Product uplaod</Link></li>
                    </ul>
                    </div>)}
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< FiShoppingCart/></span>
                        Order
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< MdOutlineMessage/></span>
                        Message
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< MdOutlineMessage/></span>
                        Message
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< FaRegBell/></span>
                        Notifications
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< IoSettingsOutline/></span>
                        Settings
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'><RxDashboard/></span>
                        Dashboard
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'><MdProductionQuantityLimits/></span>
                        Product
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< FiShoppingCart/></span>
                        Order
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< MdOutlineMessage/></span>
                        Message
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< MdOutlineMessage/></span>
                        Message
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< FaRegBell/></span>
                        Notifications
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>
                <li>
                    <Button className='w-100'>
                        <span className='icon'>< IoSettingsOutline/></span>
                        Settings
                        <span className='arrow'><IoIosArrowForward/></span>
                    </Button>
                </li>


            </ul>
        </div>
        </div>
    );
};

export default Sidebar;