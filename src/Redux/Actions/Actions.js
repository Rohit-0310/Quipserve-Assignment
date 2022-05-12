import {
    GET_ALL_POSTS_LOADING,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    ADD_LIST,
    DELETE_ICON_LIST,    
} from "../ActionTypes/actionType";
import axios from "axios";


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
export const addListAction = (formData) => {
    return {
      type: ADD_LIST,
      payload: {
        data: formData,
      },
    };
  };


export const deleteListUsingIconAction = (list) => {
    return {
      type: DELETE_ICON_LIST,
      payload: {
        data: list,
      },
    };
  };

// export const addPost = (post) => {
//     return function (dispatch) {
//         axios
//             .post(`${process.env.REACT_APP_API}`, post)
//             .then((resp) => {
//                 dispatch(postAdded());
//                 console.log("res",resp)
                
                
//             })
//             .catch((err) => console.log("err", err));
//     };
// };
