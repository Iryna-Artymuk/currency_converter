import Select from 'react-select';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 80px;
  flex: 2 1;
  font-size: 14px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 15px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 60%;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  height: 38px;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  transition: all 100ms;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;

  &:focus {
    scale: 1.1;
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
`;
export const StyledSelect = styled(Select)`
  width: 100%;
  font-size: 14px;
`;
