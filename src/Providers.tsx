/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {UserProvider} from './Context/userContext';

type AppProps = {
  children: ReactNode;
};

let socket;

const AppProviders = ({children}: AppProps) => {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  );
};

export {socket};

export default AppProviders;
