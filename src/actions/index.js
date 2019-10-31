//action creators
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fechPosts = () =>{
    return async (dispatch) =>{
        const response = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}

export const fechUser = (id) =>{
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
}