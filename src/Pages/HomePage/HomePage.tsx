// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components or functions
import { getData } from '../../services/data/data';
import { types } from '../../services/types';
import { IDataItemsState } from '../../services/reducers/rootReducer';
import SelectList from '../../components/SelectList/SelectList';

// Images
import PCIMAGE from '../../UI/Elements/PC.png';

// Styles
import './HomePage.scss';

export interface IRootReducerState {
  data: IDataItemsState[];
}

interface IDataState {
  rootReducer: IRootReducerState;
}

const HomePage = () => {
  const data = useSelector((state: IDataState) => state.rootReducer.data);
  const dipatch = useDispatch();
  React.useEffect(() => {
    getData().then((data) =>
      dipatch({ type: types.DATA_LOADED, data: data.data })
    );
  }, []);
  return (
    <div className="home-page">
      <div className="basic-info">
        <SelectList data={data} selectLimit={3} />
        <div className="pc-image">
          <img src={PCIMAGE} alt="dd" />
        </div>
        <SelectList data={data} reverse={true} selectLimit={3} />
      </div>
      <span className="total-price-title">
        Total Price: <span className="total-price">2499$</span>
      </span>

      <button className='checkout-button'>Checkout</button>
    </div>
  );
};

export default HomePage;
