import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Signup = () => {

  const [userName, setUserName]=useState('');
  const[email,setEmail]=useState('');
  const[userPassword,setUserPassword]=useState('');
  const[signupSuccess, setSignupSuccess]=useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:9090/users/registerNewUser',{userName,email,userPassword});
      console.log('Signup successful:', response.data);
      setSignupSuccess(true);
    }
    catch(error){
      console.error('Signup failed:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#F8FFD2', height: '100vh' }} >
       <Layout>
        
        <Grid>
          
          <Paper elevation={10} sx={{m:10,width:280,height:"70vh",m:"20px auto",padding: 2}}>
          <Grid align="center">
          <LockOutlinedIcon backgroundColor='green'/>
          <h2>Sign up</h2> 
          </Grid>

          <form onSubmit={handleSubmit}>
          <TextField label='username' placeholder='Enter username' fullWidth required  id="standard-basic" variant="standard" margin='3' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          <TextField label='email' placeholder='Enter username' fullWidth required  id="standard-basic" variant="standard" margin='3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField label='password' placeholder='Enter password' type='password' fullWidth required sx={{ margin: '10px 0' }}   id="standard-basic" variant="standard" margin='3' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
          <Button type='submit' color='primary' fullWidth variant="contained" sx={{ margin: '10px 0' }}>SIGN UP</Button>
          </form>

          {signupSuccess && (
              <Link to="/webshop">
                <Button color='primary' fullWidth variant="contained" sx={{ margin: '10px 0' }}>Go to Webshop</Button>
              </Link>
            )}
          
          </Paper>
        </Grid>
   
    </Layout>
    </div>
  )
}

export default Signup
