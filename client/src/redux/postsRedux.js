import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getPostsNumber = ({ posts }) => posts.data.length;

/* ACTIONS */

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
  },
};

/* REDUCER */

export const LOAD_POSTS = createActionName('LOAD_POSTS');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
      case LOAD_POSTS:
        return { ...statePart, data: action.payload };
      default:
        return statePart;
    }
  };

  /* THUNKS */
  export const loadPostsRequest = () => {
    return async dispatch => {

      try {

        let res = await axios.get(`${API_URL}/posts`);
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        dispatch(loadPosts(res.data));

      } catch(e) {
        console.log(e.message);
      }

    };
  };



