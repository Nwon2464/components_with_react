import axios from "axios";
import history from "../history";
import {
  SIGN_IN,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  SIGN_OUT,
  FETCH_VIDEOS,
} from "./types";
const BASE_URL = "http://localhost:3001";

export const signIn = (userProfile) => {
  return {
    type: SIGN_IN,
    payload: userProfile,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// -------------------------------youtube
export const fetchVideos = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/videos`);
  dispatch({ type: FETCH_VIDEOS, payload: response.data });
};
// -------------------------------

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axios.post(`${BASE_URL}/streams`, {
    ...formValues,
    userId,
  });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/streams`);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await axios.put(`${BASE_URL}/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  const response = await axios.delete(`${BASE_URL}/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
