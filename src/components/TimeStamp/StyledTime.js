import styled from 'styled-components';

export const StyledText = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: left;
  letter-spacing: 0.5px;
  line-height: 1.5;
`;

export const ContentWrapper = styled.div`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 15px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;
