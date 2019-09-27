import * as actionTypes from '../actions/actionTypes';
import { IImagesStore } from '../../types/store';
import { AnyAction } from 'redux';

const initialState:IImagesStore = {
  loading: false,
  error: null,
  images: []
};

const fetchImagesStart = (state:IImagesStore, action:AnyAction) => ({
  ...state,
  loading: true,
  error: null,
});

const fetchImagesSuccess = (state:IImagesStore, action:AnyAction) => ({
  ...state,
  loading: false,
  error: null,
  images: action.images
});

const fetchImagesFail = (state:IImagesStore, action:AnyAction) => ({
  ...state,
  loading: false,
  error: action.error
});

const reducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES_START: return fetchImagesStart(state, action);
    case actionTypes.FETCH_IMAGES_SUCCESS: return fetchImagesSuccess(state, action);
    case actionTypes.FETCH_IMAGES_FAIL: return fetchImagesFail(state, action);
    default: return state;
  }
}

export default reducer;