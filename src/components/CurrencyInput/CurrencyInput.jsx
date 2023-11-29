import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, StyledSelect } from './StyledCurrencyInput';

const CurrencyInput = ({
  value,
  currencyRates,
  currencyChange,
  amountChange,
  selected,
}) => {
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
        options={currencyOption}
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
