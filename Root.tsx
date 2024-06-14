// core
import React from 'react';
import { StatusBar } from 'expo-status-bar';

// components & theme
import { ITheme, Spinner } from 'native-base';

// hooks
// import useCachedResources from './hooks/useCachedResources';
// import useAxiosConfig from './hooks/useAxiosConfig';

// navigation
import Navigation from './navigation';
import TopNavigationBar from './navigation/TopNavigationBar';
import BottomNavigationBar from './navigation/BottomNavigationBar';

export const Root: React.FC<{ theme: ITheme }> = ({ theme }) => {
  // const isLoadingComplete = useCachedResources();
  // const isAxiosSetupComplete = useAxiosConfig();
  return (
    <>
      {/* {!isLoadingComplete && !isAxiosSetupComplete && <Spinner size="lg" />}
      {isLoadingComplete && isAxiosSetupComplete && ( */}
      {/* <> */}
      {/* <TopNavigationBar /> */}
      <TopNavigationBar />
      <Navigation theme={theme} />
      <BottomNavigationBar />
      <StatusBar />
      {/* </> */}
      {/* )} */}
    </>
  );
};
