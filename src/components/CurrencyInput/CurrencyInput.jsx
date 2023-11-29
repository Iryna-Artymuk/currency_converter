import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, StyledSelect } from './StyledCurrencyInput';

const CurrencyInput = ({
  value,
  option,
  currencyChange,
  amountChange,
  selected,
}) => {
  return (
    <InputWrapper>
      <StyledInput
        value={value}
        onChange={(e) => amountChange(e.target.value)}
      />
      <StyledSelect
        value={selected}
        onChange={currencyChange}
        options={option}
      />
    </InputWrapper>
  );
};

CurrencyInput.propTypes = {
  value: PropTypes.string,
  option: PropTypes.array,
  currencyChange: PropTypes.func,
  amountChange: PropTypes.func,
  selected: PropTypes.object,
};

export default CurrencyInput;
