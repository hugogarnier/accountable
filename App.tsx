import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { Teams } from './src/components/Teams';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
        <Teams />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
