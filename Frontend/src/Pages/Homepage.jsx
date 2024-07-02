import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import Homeui from '../Images/Home4.jpg'
import '../Styles/Homestyles.css'
import Layout2 from '../Components/Layout/Layout2'

import Carousel from '../Components/Carousel'

import Home2 from '../Images/Home2.jpg'
import Home8 from '../Images/Home8.jpg'
import Home6 from '../Images/Home6.jpg'
import Home7 from '../Images/Home7.jpg'

const Homepage = () => {

  const images = [Home8,Home6,Home7];

  return (
    <Layout2>
      <div className="home" /*style={{backgroundImage : `url(${Homeui})`}}*/>
      <Carousel images={images}/> 
         <div className="contentContainer">
          {/* <div className="backgroundWithOpacity">
          <h1>Floral Haven Online</h1>
          <p>Welcome to Sri Lanka's premier florist shop!</p>
          <p>Let us bring beauty to your occasions. </p>
          <p>Explore our collections and make every moment blossom!</p>
          </div>
          */}
          <div className="backgroundWithOpacity">
  <h1 style={{ fontSize: '3em', fontWeight: 'bold', color: 'black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Floral Haven Online</h1>
  <p style={{ fontSize: '1.5em', color: 'black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', margin: '20px 0' }}>Welcome to Sri Lanka's premier florist shop!</p>
  <p style={{ fontSize: '1.2em', color: 'black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', margin: '10px 0' }}>Let us bring beauty to your occasions.</p>
  <p style={{ fontSize: '1.2em', color: 'black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', margin: '10px 0' }}>Explore our collections and make every moment blossom!</p>
</div>

          <Link to="/login">
          <button style={{marginLeft:'15vh'}}>LOGIN</button>
          </Link>
          <Link to="/signup">
          <button style={{marginLeft:'10vh'}}>SIGN UP</button>
          </Link>
             
        </div>
        
      </div>
    </Layout2>
  )
}

export default Homepage
