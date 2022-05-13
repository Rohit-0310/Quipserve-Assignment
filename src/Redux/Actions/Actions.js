import {
    GET_ALL_POSTS_LOADING,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    ADD_LIST,
    DELETE_POST,
    ADD_POST,    
} from "../ActionTypes/actionType";
import axios from "axios";



const postDeleted = () => ({
    type: DELETE_POST
})

const postAdded = () => ({
    type: ADD_POST
})

export const getAllPostsAction = () => async(dispatch) => {
    try{
        dispatch({type: GET_ALL_POSTS_LOADING});
        let {data} = await axios
                    .get(`https://quipservepost.herokuapp.com/post`)
                dispatch({type:GET_ALL_POSTS_SUCCESS, payload:data})

    } catch (error) {
        dispatch({ type: GET_ALL_POSTS_ERROR, payload: error})
    }
};


// export const addListAction = (formData) => {
//         return {
//             type: ADD_LIST,
//             payload: {
//               data: formData,
//             },
//         };
//     };  




export const deletePost = (id) => {
    return function (dispatch) {
        axios
            .delete(`https://quipservepost.herokuapp.com/post/${id}`)
            .then((resp) => {
                dispatch(postDeleted());
                dispatch(getAllPostsAction());
                console.log("res",resp)
                
            })
            .catch((err) => console.log("err", err));
    };
};


export const addPost = (post) => {
    return function (dispatch) {
        axios
            .post(`https://quipservepost.herokuapp.com/post`, post)
            .then((resp) => {
                dispatch(postAdded());
                console.log("res",resp)
                
                
            })
            .catch((err) => console.log("err", err));
    };
};