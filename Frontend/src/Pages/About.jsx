import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:10, textAlign:'center',
                "& h4":{
                  fontWeight:'bold'
                },
                "& p":{
                  textAlign:'justify',
                  margin: 1,
                  padding: 2
                }}}>
        <Typography variant='h4'>
          Mission
        </Typography>
        <p>At Kalarosean, our mission is to bring the beauty and joy of fresh flowers to people's lives every day. 
          We are committed to providing our customers with a convenient and delightful online flower shopping 
          experience, offering a wide selection of stunning bouquets, arrangements, and gifts. Our dedicated 
          team of florists and artisans strives to exceed expectations by delivering the highest quality blooms 
          with exceptional service, making every occasion more special. We also aim to contribute to the 
          well-being of our community and the environment through sustainable practices and support for 
          local growers. With every petal we arrange, we intend to create lasting memories and share the 
          happiness that only flowers can bring.</p>
      </Box>
      <br/>
      <Box sx={{my:10, textAlign:'center',
                "& h4":{
                  fontWeight:'bold'
                }}}>
        <Typography variant='h4'>
          Vision
        </Typography>
        <p>Looking to the future, Kalaroean envisions becoming the leading online destination for floral 
          expressions and gifts, known for our innovation, quality, and exceptional customer experiences. 
          We aim to touch the lives of people worldwide by continuously expanding our range of floral products 
          and gift offerings. Our vision includes fostering long-lasting relationships with customers, 
          suppliers, and partners, guided by our core values of creativity, integrity, and sustainability. 
          We aspire to be a force for positive change, advocating for responsible sourcing, reducing our 
          environmental footprint, and supporting local communities. Our ultimate vision is to inspire 
          people to celebrate the beauty of life through the elegance of flowers, making every moment extraordinary.</p>
      </Box>
    </Layout>
  )
}

export default About
