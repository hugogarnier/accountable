import { SWITCH_IMAGE } from '../actions/app.actions';

export type InitialState = {
  showImages: boolean;
};

const initialState: InitialState = {
  showImages: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_IMAGE:
      return {
        ...state,
        showImages: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
