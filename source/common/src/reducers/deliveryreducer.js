import {
  UPDATE_SELECTED_VENUE,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_SELECTED_PRODUCT,
  ADD_TO_CART,
} from "../store/types";

export const INITIAL_STATE = {
  cart: {
    items: []
  },
  selectedVenue: null,
  selectedCategory: null,
  selectedProduct: null,

}

export const deliveryreducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case UPDATE_SELECTED_VENUE:
      return {
        ...state,
        selectedVenue: action.payload,
      };
    case UPDATE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case UPDATE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case ADD_TO_CART:

      const existingItem = state.cart.items.find(item => item.id === action.payload.id)
      let payload = null
      if (!existingItem) {
        const newItems = [...state.cart?.items, {
          ...action.payload,
          quantity: 1,
        }]
        payload = {
          ...state,
          cart: {
            ...state.cart,
            items: newItems
          },
        };
      }
      else {
        payload = {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.map(item => (
              item.id === action.payload.id ? {
                ...item,
                quantity: item.quantity + 1
              } : item
            ))
          },
        };
      }

      payload = {
        ...payload,
        cart: {
          ...payload.cart,
          total: payload.cart.items.reduce((carry, value) => {
            return carry + (value.price * value.quantity)
          }, 0)
        }
      }
      return payload
    default:
      return state;
  }
};