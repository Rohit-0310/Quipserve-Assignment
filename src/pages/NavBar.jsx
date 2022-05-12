import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate()

    const handlAddPost = () => {
        navigate("/addPost")
    }

    const handlHome = () => {
        navigate("/")
    }
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:'red' }}>
    <AppBar sx={{backgroundColor:'#424242',color:'#EEEEEE' }} position="static">
      <Toolbar>
      <Button onClick={()=>handlHome()} color="inherit">Home Page</Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Post
        </Typography>
        <Button onClick={()=>handlAddPost()} color="inherit">Add Post</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar