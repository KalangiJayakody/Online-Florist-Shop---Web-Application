import { Toolbar, Typography, AppBar, Tabs, Tab, Box } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import React from 'react'
  
const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <React.Fragment>
        <AppBar sx={{background: "#3b6b2d"}}>
            <Toolbar>
                <Typography>
                    KALA ROsean 
                </Typography>
                <FacebookRoundedIcon/>
                <TwitterIcon/>
                <WhatsAppIcon/>
                <PhoneRoundedIcon/>
            </Toolbar>

            <Box sx={{backgroundColor:"#85bf62"}}>
                  <Tabs onChange={handleChange} value={value}>
                    <Tab label='Web shop' />
                    <Tab label='Services' />
                    <Tab label='About us'/>
                  </Tabs>
               
            </Box>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar
