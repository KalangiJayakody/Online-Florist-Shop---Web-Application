import React,{useState} from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import {ITEMS} from '../Components/Items'
import Item from '../Components/Item'
import '../Styles/Webshop.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar2 from '../Components/Navbar2'
import car2 from '../Components/car2'
import Amazon from '../Components/Amazon'

const Webshop = () => {
  return (
    <Layout>

      <div className='shop'>
        <div className='shopTitle'>
          <h1>My Shopping</h1>
        </div>
      
        <div className='items'>{ITEMS.map((item)=> <Item data={item}/> )}
        </div>
      </div>
      

    </Layout>
  )
}

export default Webshop
