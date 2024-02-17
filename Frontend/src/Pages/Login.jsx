import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  return (
    <Layout>
        <Grid>
          
          <Paper elevation={10} sx={{m:10,width:280,height:"70vh",m:"20px auto",padding: 2}}>
          <Grid align="center">
          <LockOutlinedIcon backgroundColor='green'/>
          <h2>Sign in</h2> 
          </Grid>
          <TextField label='username' placeholder='Enter username' fullWidth required  id="standard-basic" variant="standard" margin='3'/>
          <TextField label='password' placeholder='Enter password' type='password' fullWidth required  id="standard-basic" variant="standard" margin='3'/>
          <Button type='submit' color='primary' fullWidth variant="contained">SIGN IN</Button>
          <Typography>
            Do you have an account? <Link>Sign up?</Link>
          </Typography>
          </Paper>
        </Grid>
      
    </Layout>
  )
}

export default Login
