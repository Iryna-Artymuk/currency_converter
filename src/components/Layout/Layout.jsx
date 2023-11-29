import { Container } from './StyledLayout';
import PropTypes from 'prop-types';
const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.object,
};
