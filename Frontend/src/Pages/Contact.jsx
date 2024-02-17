import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10,mr:10,"& h4":{fontWeight:'bold',mb:2},"& p":{textAlign:'justify'}}}>
        <Typography variant='h4'>
          Contact Us
        </Typography>
        <p>Thank you for choosing Kalarosean as yours preferred online florist. We're here to assist 
        you in every way we can. Whether you have questions, require assistance with an order, or 
        simply want to share your thoughts, our team is always ready to listen and respond. Please 
        don't hesitate to reach out to us using the contact information provided below, and we'll 
        do our best to make your floral experience with us exceptional.</p>
      </Box>
      <Box sx={{m:3, width:'600px',ml:10}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{backgroundColor:'black',color:'white',textAlign:'center'}}>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt: 1 }}/> +910 32393829 / +911 57404933
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:'blue',pt: 1 }}/> kalarosean.pvtltd@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'black',pt: 1 }}/> 011 54938300
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
