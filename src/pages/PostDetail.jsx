// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';


// import { getSinglePost } from '../redux/actions';
// import NavBar from './NavBar';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import { Button } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));




// const PostDetail = () => {


//     const navigate = useNavigate()

//     const dispatch = useDispatch()

//     const [state, setState] = useState({
//         userId: "",
//         title: "",
//         body: "",
//     })

//     // const [error, setError] = useState("")
//     const {id} = useParams({})
//     const {post} = useSelector((state)=> state.data);

//     useEffect(()=>{
//         dispatch(getSinglePost(id))
        
//     },[])

//     useEffect(()=>{
//         if(post){
//             setState({...post})
//         }
//     },[post])

//      const handlHome = () => {
//         navigate("/")
//     }

//   return (
//     <div>
//         <NavBar />
//         <h2>PostDetail</h2>
//         {/* <Box sx={{ width: '100%', maxWidth: 500 }}>
//             <Box>
//                 <Typography variant="h3" component="div" gutterBottom>
//                     Id {state.id}
//                     </Typography>
//                 <Typography variant="h3" component="div" gutterBottom>
//                     UserId {state.userId}
//                 </Typography>
//             </Box>
//         </Box> */}

//         <Box sx={{ width: '50%',  margin: "0 auto", textAlign:'left'}}>
//             <Stack spacing={2}>
//                 <Box sx={{display: 'flex',  m: 1, justifyContent: 'space-between'}}>
//                     <Item sx={{textAlign:'left', fontSize:"20px", width:'100%', p:3}} >Id:- <br/>{state.id}</Item>
//                     <Item sx={{textAlign:'left', fontSize:"20px", width:'100%', p:3}} >UserId:- <br/>{state.userId}</Item>
//                 </Box>
//               <Item sx={{textAlign:'left', fontSize:"20px" , m: 1, p:3}} >Title:- <br/> {state.title}</Item>
//               <Item sx={{textAlign:'left', fontSize:"20px" , m: 1, p:3}} >Body:- <br/> {state.body}</Item>
//             </Stack> 
//             <Button onClick={()=>handlHome()} style={{width:"150px", marginTop:"20px"}} type="submit"  color="secondary" variant="outlined">Home Page</Button>
//         </Box>
        

               
//     </div>
//   )
// }

// export default PostDetail