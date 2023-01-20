// Global
import React from 'react';
import ReactSelect from 'react-select';

// Styles
import './Select.scss';

interface IOptions {
  label: string;
  value: string;
  price?: string;
}

export interface ISelector {
  title: string;
  errorOptionsMessage: string;
  options: IOptions[];
}

function Select({ options, title, errorOptionsMessage }: ISelector) {
  const [currentValue, setCurrentValue] = React.useState<string>('');

  React.useEffect(() => {
    if (currentValue) {
      console.log(currentValue);
    }
  }, [currentValue]);

  return (
    <div className={`select`}>
      <p className="select-title">{title}</p>
      <ReactSelect
        className="select-options"
        menuPosition="absolute"
        isSearchable={false}
        onChange={(state: any) => setCurrentValue(state?.label)}
        noOptionsMessage={() => errorOptionsMessage}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: 'none',
            border: 'none',
            borderRadius: 12,
            backgroundColor: '#fff',
            cursor: 'pointer',
          }),
          menu() {
            return {
              position: 'absolute',
              width: '100%',
              top: '40px',
              fontFamily: 'Inter',
              backgroundColor: '#fff',
              boxShadow: '1px 5px 15px #000',
              zIndex: 2,
              borderBottomLeftRadius: '12px',
              boxSizing: 'border-box',
              borderBottomRightRadius: '12px',
              padding: '8px',
            };
          },
          option() {
            return {
              cursor: 'pointer',
              backgroundColor: '#fff',
              transition: '.5s',
              padding: '10px 5px',
              color: '#000',
              borderRadius: '5px',
              fontFamily: 'Inter',

              ':hover': {
                backgroundColor: '#fc5f5f',
                color: '#fff',
              },
            };
          },
          valueContainer: (base) => {
            return {
              ...base,
              backgroundColor: '#fff',
            };
          },
        }}
        options={options.map((option) => {
          return {
            label: (
              <div>
                <p color="#000">{option.label}</p>
              </div>
            ),
            value: option.value,
          };
        })}
      />
    </div>
  );
}
export default React.memo(Select);
