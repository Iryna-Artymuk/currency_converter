import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, StyledSelect } from './StyledCurrencyInput';
import { useTheme } from 'styled-components';

const CurrencyInput = ({
  value,
  currencyRates,
  currencyChange,
  amountChange,
  selected,
}) => {
  const theme = useTheme();

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: 'none',
      // '&:hover': {
      //   scale: '1.1 !important',
      // },
      scale: state.isFocused ? '1.1' : '1',
    }),
    option: (base, state) => ({
      ...base,
      background: state.isSelected
        ? theme.colors.inputBackground
        : theme.colors.background,
    }),
  };
  const currencyOption = () => {
    if (currencyRates) {
      const options = Object.keys(currencyRates)?.reduce((acc, item) => {
        const optionItem = {};
        optionItem.value = item;
        optionItem.label = item;
        acc.push(optionItem);
        return acc;
      }, []);
      return options;
    }
    return {};
  };

  return (
    <InputWrapper>
      <StyledInput
        value={value}
        onChange={(e) => amountChange(e.target.value)}
        placeholder="enter amount"
      />
      <StyledSelect
        value={selected}
        onChange={currencyChange}
        options={currencyOption()}
        styles={selectStyles}
      />
    </InputWrapper>
  );
};

CurrencyInput.propTypes = {
  value: PropTypes.string,
  currencyRates: PropTypes.array,
  currencyChange: PropTypes.func,
  amountChange: PropTypes.func,
  selected: PropTypes.object,
};

export default CurrencyInput;
