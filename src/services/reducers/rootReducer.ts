import { combineReducers } from 'redux';
import { types } from '../types';

interface IAction {
  type: string;
  data: object;
}

export interface IDataItemsState {
  CPU: Array<object>;
  GPU: Array<object>;
  RAM: Array<object>;
  motherboard: Array<object>;
  powerSupply: Array<object>;
  SSD: Array<object>;
}

const initalStore = {
  CPU: [],
  GPU: [],
  RAM: [],
  motherboard: [],
  powerSupply: [],
  SSD: [],
};

const rootReducer = (state = initalStore, action: IAction) => {
  switch (action.type) {
    case types.DATA_LOADED: {
      return {
        ...state,
        data: action.data,
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
