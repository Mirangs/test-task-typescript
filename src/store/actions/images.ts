import * as actionTypes from './actionTypes';
import axios from '../../axios-images';
import { ThunkDispatch } from 'redux-thunk';
import { IImagesStore } from '../../types/store';

export const fetchImagesStart = () => ({
  type: actionTypes.FETCH_IMAGES_START
});

export const fetchImagesSuccess = (images:object[]) => ({
  type: actionTypes.FETCH_IMAGES_SUCCESS,
  images
});

export const fetchImagesFail = (error: string | null) => ({
  type: actionTypes.FETCH_IMAGES_FAIL,
  error
});

export const initImages = () => {
  return (dispatch:ThunkDispatch<IImagesStore, any, any>) => {
    dispatch(fetchImagesStart());
    axios.get('')
      .then(res => {
        dispatch(fetchImagesSuccess(res.data.hits));
      })
      .catch(err => {
        dispatch(fetchImagesFail(err));
      });
  }
}