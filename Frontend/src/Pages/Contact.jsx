import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import talkingPhone2 from "../Images/talkingPhone2.jpg"
import Layout2 from '../Components/Layout/Layout2';

import "../Styles/Contact.css"

const Contact = () => {
  return (
    <Layout2>
      <div>
      <img src={talkingPhone2} id='about-image'/>
      <div id="contact-title" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', top: '55vh', left: '50vh', width: '35%' }}>
            <Typography variant="h6"  sx={{ fontFamily: 'Lobster',fontSize:'75px' }}>Get In Touch</Typography>
          </div>
      </div>
     
      <Box sx={{my:5,ml:10,mr:10,"& h4":{fontWeight:'bold',mb:2},"& p":{textAlign:'justify'}}}>
        <Typography variant='h4'>
        "Reach out and let your floral dreams blossom!"
        </Typography>
        <p>Welcome to Kalarosean, your trusted online florist! Need assistance? Our dedicated team is here for you. 
          Reach out with any questions or to place an order. Let's make your floral experience exceptional!</p>
      </Box>
      <Box sx={{ m: 3, width: '600px', ml: 10 }}>
  <TableContainer component={Paper} sx={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
    <Table aria-label='contact table'>
      <TableHead>
        <TableRow>
          <TableCell sx={{ backgroundColor: '#4CAF50', color: 'white', textAlign: 'center', fontSize: '24px', fontFamily: 'Arial', fontWeight: 'bold', borderBottom: 'none' }}>
            Contact Details
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell sx={{ borderBottom: 'none' }}>
            <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> +910 32393829 / +911 57404933
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ borderBottom: 'none' }}>
            <EmailIcon sx={{ color: 'blue', pt: 1 }} /> kalarosean.pvtltd@gmail.com
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <CallIcon sx={{ color: 'black', pt: 1 }} /> 011 54938300
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
</Box>

    </Layout2>
  )
}

export default Contact
