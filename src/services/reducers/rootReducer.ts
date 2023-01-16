import { combineReducers } from 'redux';

interface Action {
  type: string;
}

const initalStore = {
  data: {},
};

const rootReducer = (state = initalStore, action: Action) => {
  switch (action.type) {
    case 'DATA_LOADED': {
      return {
        ...state,
        data: '',
      };
    }
    default: {
      return state;
    }
  }
};

const allReducers = combineReducers({
  rootReducer,
});

export default allReducers;
