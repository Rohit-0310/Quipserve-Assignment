import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
// import { deletePost, loadPosts } from '../redux/actions';

import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavBar from './NavBar';
import { deleteListUsingIconAction, deletePost, getAllPostsAction } from '../Redux/Actions/Actions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  



const Home = () => {

    let dispatch = useDispatch();
    const navigate = useNavigate()

    const {posts} = useSelector(state => state.allPostsReducer);



    useEffect(()=>{
        dispatch(getAllPostsAction())
    }, [dispatch])

    

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you want to delete this post?')){
            dispatch(deletePost(id));
            
        }
    };

    // const handlAddPost = () => {
    //     navigate("/addPost")
    // }


    // const handleEdit = (pid) => {
    //     navigate(`/edit/${pid}`)
    // }

    // const handleView = (pid) => {
    //     navigate(`/post/${pid}`)
    // }


    return (
        <div>
            <NavBar />
            {/* <div>
                <Button style={{width:"150px", marginTop:"20px"}} onClick={()=>handlAddPost()} color="secondary" variant="outlined">Add Post</Button>
            </div> */}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, marginTop:5 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">UserId</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Body</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>

            {/* <StyledTableCell align="center">Action</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        {posts && posts.map((post) => (
            <StyledTableRow key={post.id}>
              <StyledTableCell width="3%" component="th" scope="row">{post.id}</StyledTableCell>
              <StyledTableCell width="5%" align="left">{post.userId}</StyledTableCell>
              <StyledTableCell width="20%" align="left">{post.title}</StyledTableCell>
              <StyledTableCell width="60%" align="left">{post.body}</StyledTableCell>


              <StyledTableCell width="3%" align="left">
                <DeleteIcon color='error' 
                onClick={()=>handleDelete(post.id)} 
                />
              </StyledTableCell>

              <StyledTableCell width="3%" align="left">
                <EditIcon color='primary' 
                // onClick={()=>handleEdit(post.id)}
                />
              </StyledTableCell>

              <StyledTableCell width="3%" align="left">
                <VisibilityIcon color='error' 
                // onClick={()=>handleView(post.id)}
                />
              </StyledTableCell>

              {/* <StyledTableCell align="center">
                <ButtonGroup variant="text" aria-label="text button group">

                <DeleteIcon color='error' onClick={()=>handleDelete(post.id)} />
                <EditIcon color='primary' onClick={()=>handleEdit(post.id)}/>
                <VisibilityIcon />
                  
                  <Button 
                    onClick={()=>handleDelete(post.id)}
                  >Delete</Button>
                  
                  <Button onClick={()=>handleEdit(post.id)}>Edit</Button>
                  <Button>View</Button>
                </ButtonGroup>
              </StyledTableCell> */}
            </StyledTableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Home