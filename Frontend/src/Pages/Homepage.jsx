import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import Homeui from '../Images/Home4.jpg'
import '../Styles/Homestyles.css'

const Homepage = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage : `url(${Homeui})`}}>
        <div className="headerContainer">
          <h1>Online Florist shop</h1>
          <p>The most famous florist shop in Sri Lanka. Let's give some special to your special ones</p>
          <Link to="/login">
          <button>LOG IN HERE</button>
          </Link>
          
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
