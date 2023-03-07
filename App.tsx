import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';

import { Test } from './src/components/Test';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
        <Test />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
