import * as api from'../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

//Action Creators

export const getPosts =()=>async (dispatch)=>{
try {
    const {data} = await api.fetchPosts();

    dispatch({type:FETCH_ALL, payload: data});
} catch (error) {
    console.log(error)
}

  
};



export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  


  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      console.log(data)
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  

 
export const deletePost = (id) => async (dispatch) => {
  try {
    console.log(`Attempting to delete post with ID: ${id}`);
    await api.deletePost(id);
    console.log(`Successfully deleted post with ID: ${id}`);
    
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.error('Error in deletePost action:', error);
  }
};

