// Global
import React from 'react';

// Inteface
import { IRootReducerState } from '../../Pages/HomePage/HomePage';

// Components
import Select from '../UI/Select/Select';

// Styles
import './SelectList.scss';

interface ISelectList extends IRootReducerState {
  selectLimit?: number;
  reverse?: boolean;
  errorOptionsMessage?: string;
}

function SelectList({
  data,
  selectLimit = 0,
  reverse,
  errorOptionsMessage = 'Not found',
}: ISelectList) {
  const [dataItems, setDataItems] = React.useState<object[]>([]);
  const [dataKeys, setDataKeys] = React.useState<string[]>([]);
  const validationSelectLimit = dataItems && selectLimit >= 1;
  const reverseKeys = dataKeys.map((state) => state).reverse();
  const validationReverse = reverse && dataItems;
  function finalData() {
    const currentDataItems = Object.values(data);
    const currentDataKeys = Object.keys(data);

    setDataItems(() => {
      return currentDataItems;
    });
    setDataKeys(() => {
      return currentDataKeys;
    });
  }

  React.useEffect(() => {
    if (data) {
      finalData();
    }
  }, [data]);
  return (
    <div className="select-list">
      {validationSelectLimit && !reverse
        ? dataItems
            .filter((_, i) => i < selectLimit)
            .map((state: any, i: number) => {
              const result = state.map((state: object[]) => state);
              return (
                <Select
                  title={dataKeys[i]}
                  errorOptionsMessage={errorOptionsMessage}
                  options={result}
                  key={i}
                />
              );
            })
        : reverse && !selectLimit && dataItems
        ? dataItems.reverse().map((state: any, i: number) => {
            const result = state.map((state: object[]) => state);
            return (
              <Select
                title={dataKeys[i]}
                errorOptionsMessage={errorOptionsMessage}
                options={result}
                key={i}
              />
            );
          })
        : validationReverse && validationSelectLimit
        ? dataItems
            .reverse()
            .filter((_, i) => i < selectLimit)
            .map((state: any, i: number) => {
              const result = state.map((state: object[]) => state);
              return (
                <Select
                  title={reverseKeys[i]}
                  errorOptionsMessage={errorOptionsMessage}
                  options={result}
                  key={i}
                />
              );
            })
        : dataItems &&
          !!dataItems.length &&
          dataItems.map((state: any, i: number) => {
            const result = state.map((state: object[]) => state);
            return (
              <Select
                title={dataKeys[i]}
                errorOptionsMessage={errorOptionsMessage}
                options={result}
                key={i}
              />
            );
          })}
    </div>
  );
}

export default SelectList;
