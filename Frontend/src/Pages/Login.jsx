import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword,setUserPassword]=useState('');
  const[loginError,setLoginError]=useState('');

  const handleSubmit =async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:9090/users/login',{userName,userPassword});
      if(response.status===200){
        window.location.href='/webshop';
      }
      else{
        setLoginError('Invalid username and password');
      }
    }
    catch(error){
      console.error('login failed',error);
      setLoginError('Login failed. Please try again!');

    }

  };

  return (
    <div style={{ backgroundColor: '#F8FFD2', height: '100vh' }} >
    <Layout>
        <Grid>
          
          <Paper elevation={10} sx={{m:10,width:280,height:"70vh",m:"20px auto",padding: 2}}>
          <Grid align="center">
          <LockOutlinedIcon backgroundColor='green'/>
          <h2>Sign in</h2> 
          </Grid>

          <form onSubmit={handleSubmit}>
          <TextField label='username' placeholder='Enter username' fullWidth required  id="standard-basic" variant="standard" margin='3' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          <TextField label='password' placeholder='Enter password' type='password' fullWidth required  id="standard-basic" variant="standard" margin='3' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
          <Button type='submit' color='primary' fullWidth variant="contained" sx={{ margin: '10px 0' }}  >SIGN IN</Button>
          {loginError && <Typography color='error' >{loginError}</Typography>}
          </form>
          

          <Typography>
            Do you have an account? <Link to="/signup">Sign up?</Link>
          </Typography>
          </Paper>
        </Grid>
      
    </Layout>
    </div>
  )
}

export default Login
