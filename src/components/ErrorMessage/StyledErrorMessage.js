import styled from 'styled-components';

export const StyledText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.errorColor};
  text-align: center;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  height: 50%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 5px;
  border-radius: 15px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;
