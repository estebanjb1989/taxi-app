import {
  UPDATE_SELECTED_VENUE,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_SELECTED_PRODUCT,
  ADD_TO_CART,
} from "../store/types";

export const updateSelectedVenue = (payload) => (dispatch) => {

  dispatch({
    type: UPDATE_SELECTED_VENUE,
    payload,
  });
};


export const updateSelectedCategory = (payload) => (dispatch) => {

  dispatch({
    type: UPDATE_SELECTED_CATEGORY,
    payload,
  });
};


export const updateSelectedProduct = (payload) => (dispatch) => {

  dispatch({
    type: UPDATE_SELECTED_PRODUCT,
    payload,
  });
};

export const addToCart = (payload) => (dispatch) => {

  dispatch({
    type: ADD_TO_CART,
    payload,
  });
};