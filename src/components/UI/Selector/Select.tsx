// Styles
import './Select.scss';
import ReactSelect from 'react-select';

interface ISelector {
  options: Array<string>;
  title: string;
  errorOptionsMessage: string;
}

export default function Select({
  options,
  title,
  errorOptionsMessage,
}: ISelector) {
  return (
    <div className={`select`}>
      <p className="select-title">{title}</p>
      <ReactSelect
        className="select-options"
        menuPosition="absolute"
        isSearchable={false}
        noOptionsMessage={() => errorOptionsMessage}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: 'none',
            border: 'none',
            borderRadius: 12,
            backgroundColor: '#fff',
            cursor: 'pointer',
            zIndex: '2',
          }),
          menu() {
            return {
              position: 'absolute',
              width: '100%',
              top: '30px',
              fontFamily: 'Inter',
              backgroundColor: '#fff',
              boxShadow: '1px 5px 15px #000',
              borderBottomLeftRadius: '12px',
              boxSizing: 'border-box',
              borderBottomRightRadius: '12px',
              padding: '12px',
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
        options={options}
      />
    </div>
  );
}
