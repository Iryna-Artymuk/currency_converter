// приклад   background: ${({theme}) => theme.colors.mainBackgroundColor};

import { ThemeProvider } from 'styled-components';
import { appTheme } from './themeOptions';

export const Theme = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
