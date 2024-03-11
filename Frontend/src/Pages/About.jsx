import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Typography } from '@mui/material'

import "../Styles/About.css"

import story3 from '../Images/story3.jpg'
import about1 from '../Images/about1.jpg'
import about5 from '../Images/about5.jpg'
import about7 from '../Images/about7.jpg'
import story1 from '../Images/story1.jpg'

const About = () => {
  return (
    <Layout>
       <div className="about-container">
        <div className="story1-container">
          <img src={story3} alt="Story1" className="story3-image" />
          <div className="story-title">
            <Typography variant="h4"  sx={{ fontFamily: 'Lobster',fontSize:'95px' }}>Our Story</Typography>
          </div>
        </div>
        <div className="story-text">
          <p>
            "At Kalarosean, our story is simple yet heartfelt. It's about a love for flowers and a 
            desire to bring joy to others. From our modest beginnings, we've blossomed into a 
            beloved destination for those seeking beauty and elegance in floral arrangements. 
            With each creation, we aim to capture the essence of nature's beauty and share it with 
            the world. Our story is one of passion, creativity, and the enduring magic of flowers 
            – a story we're excited to share with you."
          </p>
        </div>
      </div>

      <div className="bottom-text">
      <div className="bottom-paragraphs1">
    <div className="text-container">
        <Typography sx={{ fontFamily: 'Lobster', fontSize: '15px'}}>Our Founder</Typography>
        <h1>ROH & SEN</h1>
        <p style={{marginRight:'30vh'}}>Founded in 1998 by floral enthusiasts Roh and Sen, our online florist shop began with
            a passion for bringing the beauty of fresh flowers to people's doorsteps. What started
            as a humble endeavor has blossomed into a renowned destination for exquisite floral
            arrangements and gifts.</p>
    </div>
    <img src={story1} />
</div>
        

        <div className="bottom-paragraphs2">
        <img src={about7}/>
          <div className="text-container">
          <h1 style={{marginLeft:'30vh'}}> MISSION</h1>
        <p style={{marginLeft:'30vh'}}>"At Kalarosean, our mission is to bring the beauty and 
        joy of fresh flowers to people's lives every day. We are committed to providing our 
        customers with a delightful online flower shopping experience, offering stunning 
        bouquets, arrangements, and gifts. Our dedicated team strives to exceed expectations 
        with exceptional service, making every occasion more special."</p>

          </div>
       
      
       
        </div>

        <div className="bottom-paragraphs3">
          <div className="text-container">
          <h1>  VISION</h1>
        <p style={{marginRight:'30vh'}} >"Looking to the future, Kalarosean envisions becoming 
        the leading online destination for floral expressions and gifts, known for innovation, 
        quality, and exceptional customer experiences. Our vision includes fostering relationships 
        with customers, suppliers, and partners, guided by our core values of creativity, 
        integrity, and sustainability."</p>
          </div>
    
          <img src={about1}/>

        </div>
      </div>
      
    </Layout>
  )
}

export default About
