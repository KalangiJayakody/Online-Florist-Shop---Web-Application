import React from 'react';
import { Modal, Typography } from '@mui/material';

const ItemDetailsModal = ({ open, handleClose, item }) => {
  // Check if item is null before accessing its properties
  if (!item) {
    return null; // or any other fallback UI you want to render
  }

  return (
    <Modal open={open} onClose={() => handleClose(null)}   style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',    
      }}>
      <div style={{backgroundColor:'white',width:'60vh',position:'relative', textAlign: 'center', borderRadius:'8vh',border: '2px solid black', // Add border style here
        padding: '2vh', }}>
      <img src={item.item_image} style={{marginTop:'5%'}} />
        <Typography variant="h5" style={{marginTop:'3%', fontFamily:'Poppins',fontWeight:'bold'}}>{item.item_name}</Typography>
        <Typography variant="body1"  style={{fontFamily:'Poppins'}} >{item.item_description}</Typography>
        <Typography variant="body1" style={{fontFamily:'Poppins',fontSize:'1.5rem',color:'red'}} > ${item.item_price}</Typography>
        <Typography variant="body1" style={{marginTop:'5%'}}>Ratings: {item.item_rating}</Typography>
        
        <Typography variant="body1"  style={{fontFamily:'Poppins'}}>Size: {item.item_size}</Typography>
        <Typography variant="body1"  style={{fontFamily:'Poppins',color:'green',fontWeight:'bold'}}>Stock now: {item.item_stock}</Typography>

        <Typography style={{marginTop:'5%', marginBottom: '5%', fontFamily:'Poppins',fontWeight:'bold',fontSize:'1rem' }}>"Premium Picks; More Options Await"</Typography>
      </div>
    </Modal>
  );
};

export default ItemDetailsModal;
