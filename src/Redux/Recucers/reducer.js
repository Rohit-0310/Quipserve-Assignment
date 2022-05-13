import {
    GET_ALL_POSTS_LOADING,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_ERROR,
    ADD_LIST,
    DELETE_POST,
    ADD_POST,
    

} from "../ActionTypes/actionType";


const allPostsReducer =(state = {posts: []}, action) => {

    switch (action.type) {
        case GET_ALL_POSTS_LOADING:
            return { loading: true, posts: []};

        case GET_ALL_POSTS_SUCCESS:
            return { ...state, loading:false, posts: action.payload}

        case GET_ALL_POSTS_ERROR:
            return {loading:false, error: action.payload}

        case ADD_LIST:
            return {
              ...state,
              listData: [...state.listData, action.payload.data],
            };

            
        case ADD_POST:
        return { ...state,  loading:false,}

        case DELETE_POST:
             return { ...state,  loading:false,}

            
        default:
            return state;
    };

}

export default allPostsReducer;