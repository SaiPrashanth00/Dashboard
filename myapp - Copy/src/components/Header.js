import React, { useState,useContext ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from'../../src/images/pngwing.com.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";

import Search from './Search';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import pic from'../../src/images/profile_picture.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { FaShieldAlt } from "react-icons/fa";
import { MyContext } from '../App';



const Header = () => {
  const context=useContext(MyContext);
  const [isLogin,setIsLogin]=useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    

    const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the preferred theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Update the localStorage and document body class whenever the theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

    return (
        
          <header className="d-flexx align-items-center">
            <div className="container-fluid w-100" ></div>
              <div className="row d-flex align-items-center w-100">
                <div className='col-sm-2 part1'>
                    <Link to={'/'}><img src={logo} className='logo'/>
                  <span>Hotash</span>
                  </Link>
                </div>
                <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
                  <Button className='rounded-circle mr-3'onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                  {
                    context.isToggleSidebar===false?<MdOutlineMenuOpen/>:
                    <MdMenu/>
                  }
                  </Button>
                  <Search/>
                  </div>
                  <div className='col-sm-7 d-flex align-items-center justify-content-end part3'>

              <Button onClick={toggleTheme}><MdLightMode/></Button>
               

                
                    <Button className='rounded-circle mr-3'><IoCart/></Button>
       
                    <Button className='rounded-circle mr-3'><MdOutlineEmail/></Button>
                    <Button className='rounded-circle mr-3'><FaRegBell/></Button>

                    
                    
                    <Button className='btn-blue'>Sign In</Button>
                    <div className='myAccWrapper'>
                      <Button className='myAcc d-flex align-items-center'onClick={handleClick}>
                      <div className='userImg'>
                        <span className='rounder-circle'>
                          <img src={pic} className='myPic'/>
                        </span>
                      </div>
                      </Button>
                      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          MyAccount
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FaShieldAlt fontSize="small" />
          </ListItemIcon>
          ResetPassword
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
                      <div className='userInfo'>
                        <h4>Prashanth</h4>
                        <p className='mb-0'>prashanthredie251@gmail.com</p>
                        
                      </div>

                    </div>
                    </div>   
            </div>
          </header>
       
    );
};

export default Header;