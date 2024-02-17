import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <>
    
        <Box sx={{textAlign: 'center', bgcolor: '#064d18' , color : "white" , p:3}}>
        <Box sx={{my:3 , " & svg" : {fontSize : "60 px", cursor : 'pointer', mr: 2}, "& svg: hover" :{color:'#1a97eb',transform: 'translateX(5 px)', transition:'all 30ms'},}}>
            <InstagramIcon/>
            <TwitterIcon/>
            <WhatsAppIcon/>
           
            <LocalPhoneIcon/>   
        </Box>
            <Typography variant='h5' sx={{"@media (max-width: 600 px)" : {fontSize: "1 rem",},}}>
                All right reserved &copy; Kala Rose Florist Shop
            </Typography>
        </Box>
    </>
  )
}

export default Footer
