import PropTypes from 'prop-types';
import { ContentWrapper, StyledText } from './StyledErrorMessage';

const ErrorMessage = ({ children }) => {
  return (
    <ContentWrapper>
      <StyledText>Sorry, {children}</StyledText>
    </ContentWrapper>
  );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.array,
};
