import React, { FC } from 'react';

interface IRootReducer {
  state: any;
  action: any;
}

const rootReducer = ({ state, action }: IRootReducer) => {
  switch (action) {
    default:
      return state;
  }
};

export default rootReducer;
