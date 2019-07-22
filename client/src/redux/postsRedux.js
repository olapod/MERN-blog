import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getPosts = ({ posts }) => posts.data;
export const getPostsNumber = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;
export const getSinglePost = ({ posts }) => posts.singlePost;

/* ACTIONS */

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* INITIAL STATE */

const initialState = {
  data: [],
  singlePost: {
    id: '',
    title: '',
    content: ''
  },
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({ payload, type: LOAD_SINGLE_POST });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
      case LOAD_POSTS:
        return { ...statePart, data: action.payload };
      case LOAD_SINGLE_POST:
        return { ...statePart, singlePost: action.payload };
      case START_REQUEST:
        return { ...statePart, request: { pending: true, error: null, success: null } };
      case END_REQUEST:
        return { ...statePart, request: { pending: false, error: null, success: true } };
      case ERROR_REQUEST:
        return { ...statePart, request: { pending: false, error: action.error, success: false } };
      default:
        return statePart;
    }
  };

  /* THUNKS */
  export const loadPostsRequest = () => {
    return async dispatch => {

      dispatch(startRequest());
      try {

        let res = await axios.get(`${API_URL}/posts`);
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        dispatch(loadPosts(res.data));
        dispatch(endRequest());

      } catch(e) {
        dispatch(errorRequest(e.message));
      }

    };
  };

  export const loadSinglePostRequest = () => {
    return async dispatch => {

      dispatch(startRequest());
      try {

        let res = await axios.get(`${API_URL}/posts/:id`);
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        dispatch(loadSinglePost(res.singlePost));
        dispatch(endRequest());

      } catch(e) {
        dispatch(errorRequest(e.message));
      }

    };
  };




