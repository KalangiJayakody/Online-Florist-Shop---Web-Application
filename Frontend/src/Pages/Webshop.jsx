// Webshop.js

import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { ITEMS } from '../Components/Items';
import Item from '../Components/Item';
import ItemDetailsModal from '../Components/ItemDetailsModal';
import '../Styles/Webshop.css';
import { Typography } from '@mui/material';
import webshopimage1 from "../Images/webshopimage1.jpg";


import axios from 'axios';

const Webshop = () => {
  const [flowerItems, setFlowerItems] = useState([]); // State to store flower items
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  

  return (
    <Layout>
      <div className='shop'>
        <img src={webshopimage1} style={{ width: '100%', height: '25vh' }} />
        <div className='shopTitle'>
          <Typography style={{ fontSize: '40px', fontFamily: 'Poppins' }}>Latest Products</Typography>
        </div>
        <div className='items'>
          {ITEMS.map((item) => (
            <Item key={item.item_id} data={item} onItemClick={handleItemClick}  showButtons={true} />
          ))}
        </div>
      </div>

      <ItemDetailsModal open={modalOpen} handleClose={handleCloseModal} item={selectedItem} />
      
    </Layout>
  );
};

export default Webshop;
