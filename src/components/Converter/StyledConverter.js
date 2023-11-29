import Select from 'react-select';
import styled from 'styled-components';

export const StyledConverter = styled.div`
  padding: 10px 40px;
  width: 100%;
  height: 50%;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.background};
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;
export const StyledTitel = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.titlecolor};
`;

export const StyledForm = styled.div`
  width: 100%;
  display: flex;

  gap: 30px;
  justify-content: center;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  outline: 1px solid blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 5px;
`;
export const InputWrapper = styled.div`
  outline: 1px solid green;
  display: flex;

  justify-content: center;
  align-items: center;
  min-height: 50px;
  flex: 2 1;
  font-size: 18px;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  font-size: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;
export const StyledSelect = styled(Select)`
  width: 100%;
  border: 1px solid orange;
`;
