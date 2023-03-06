/* import {} from '../actions/app.actions'; */

const initialState = {
  showImages: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_IMAGES':
      return {
        ...state,
        showImages: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
