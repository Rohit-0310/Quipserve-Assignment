import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



import { addPost } from '../Redux/Actions/Actions';
import NavBar from './NavBar';




const AddPost = () => {

    
    const navigate = useNavigate()

    const [state, setState] = useState({
        userId: "",
        title: "",
        body: "",
    })
    const dispatch = useDispatch()

    const [error, setError] = useState("")

    const handleInputChange = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!userId || !title || !body){
            setError("Plaese Enter All The Input field")
        } else {
            dispatch(addPost(state))
            navigate("/")
            setError("")
        }
    }

    // const handlHome = () => {
    //     navigate("/")
    // }

    const {userId, title, body} = state;
    return (
      <div>
          <NavBar />
          {/* <Button onClick={()=>handlHome()} style={{width:"150px", marginTop:"20px"}} type="submit"  color="secondary" variant="outlined">Home Page</Button> */}
        <h2>Add Post</h2>
        {error && <h2><Alert severity="error">{error}</Alert></h2>}
            <Box onSubmit={handleSubmit}
                component="form"
                    sx={{
                       '& > :not(style)': { m: 1, width: '65ch' },
                    }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" name="userId" value={userId} type="number"  label="UserId"  /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" multiline name="title" value={title}  type="text"    label="Title" /><br/>
                <TextField onChange={handleInputChange} variant="standard" id="standard-basic" multiline name="body" value={body}   type="text"    label="Body" /><br/>

                <Button    onChange={handleInputChange}   style={{width:"150px"}} type="submit"  color="secondary" variant="outlined">Submit</Button>
            </Box>
            
      </div>
    )
}

export default AddPost