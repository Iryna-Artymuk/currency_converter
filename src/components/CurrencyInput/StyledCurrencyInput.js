import Select from 'react-select';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  outline: 1px solid green;
  width: 50%;
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 30px;
  min-height: 50px;
  flex: 2 1;
  font-size: 18px;
  padding: 5px;
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
`;
export const StyledSelect = styled(Select)`
  width: 100%;
`;
