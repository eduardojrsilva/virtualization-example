import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      {children}
    </BrowserRouter>
  );
};

export default AppProvider;
