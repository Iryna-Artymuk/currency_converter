import styled from 'styled-components';

export const StyledConverter = styled.div`
  padding: 10px 40px;
  width: 80%;
  height: 50%;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.background};
`;
export const StyledTitel = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.titlecolor};
`;
