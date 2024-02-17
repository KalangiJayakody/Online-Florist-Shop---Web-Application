import React,{useState} from 'react'
import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from 'react-router-dom';
import "../../Styles/Headerstyles.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const[mobileOpen,setMobileOpen]=useState(false)

  const handleDrawerToggle = ()=> {
    setMobileOpen(!mobileOpen)
  }


  const drawer = (
    <Box onClick ={handleDrawerToggle} sx={{testAlign : 'center'}}>
     <Typography color={"#45453b"} 
                        variant='h4' 
                        component="div"
                        sx={{flexGrow:1}}>
              <LocalFloristIcon color={"#2cd42c"}/>
              Kalarosean
            </Typography>
           
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"}>Homepage</Link>
                </li>
                <li>
                  <Link to={"/about"}>About </Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/webshop"}>Webshop</Link>
                </li>
              </ul>
    
    </Box>

  )
  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:"#83eb6e"}}>
          <Toolbar>
            <IconButton color='black' 
                        aria-label='open drawer' 
                        edge='start' 
                        sx={{mr:2, display:{sm: 'none'}}}
                        onClick={handleDrawerToggle}>
              <MenuIcon/>
            </IconButton>
             
            <Typography color={"#45453b"} 
                        variant='h4' 
                        component="div"
                        sx={{flexGrow:1}}>
              <LocalFloristIcon color={"#2cd42c"}/>
              Kalarosean
            </Typography>
            {/* <Typography color={"#45453b"} variant='h6' component="div">
              Just flowering the feelings
            </Typography> */}

            <Box sx={{display:{xs:'none',sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"}>Homepage</Link>
                </li>
                <li>
                  <Link to={"/about"}>About </Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/webshop"}>Webshop</Link>
                </li>
              </ul>
            </Box>

          </Toolbar>     
        </AppBar>

        <Box component='nav'>
          <Drawer variant='temporary' 
          open={mobileOpen} 
          onClose={handleDrawerToggle}
          sx={{display:{xs:'block',sm:'none'}}}>

          </Drawer>

        </Box>
      </Box>
      <Box>
      <Toolbar/>
      </Box>
    
    </div>
  )
}

export default Header
