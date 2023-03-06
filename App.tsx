import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { Image, FlatList, SafeAreaView, Text, View } from 'react-native';
import { lightTeams } from './src/api/getTeams';
import { LightTeam } from './src/types/team';

const App = () => {
  const [teams, setTeams] = useState<LightTeam[]>([]);

  useEffect(() => {
    (async () => {
      const response = await lightTeams();
      if (response) setTeams(response);
    })();
  }, []);

  const renderItem = ({ item }) => {
    console.log('itemName', item.shortDisplayName);
    console.log('----------');
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Text>{item.shortDisplayName}</Text>
        <Image source={{ uri: item.logoHref }} style={{ width: 50, height: 50 }} />
      </View>
    );
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
        <View style={{}}>
          <FlatList
            data={teams}
            renderItem={renderItem}
            keyExtractor={(item) => item.shortDisplayName}
          />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
