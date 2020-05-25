
import {SafeAreaView} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';

import Box from './src/components/Box';

import {store} from './src/store/store';





const App = () => {
  return (
    <Provider store={store}>
     <SafeAreaView style={{flex: 1}}>
       <Box color="green" />
       <Box color="blue" />
     </SafeAreaView>
    </Provider>
  );
};

export default App;
