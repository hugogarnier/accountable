import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import { switchImage } from '../store/actions/app.actions';
import { useEffect, useState } from 'react';
import { LightTeam } from '../types/team';
import { useDispatch, useSelector } from 'react-redux';
import { lightTeams } from '../api/getTeams';
import { InitialState } from '../store/reducers/app.reducer';

export const Test = () => {
  const [search, setSearch] = useState('');
  const [filteredTeams, setFilteredTeams] = useState<LightTeam[]>([]);
  const [teams, setTeams] = useState<LightTeam[]>([]);

  const showImage = useSelector<InitialState>((state) => state.showImages);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await lightTeams();
      if (response) {
        setTeams(response);
        setFilteredTeams(response);
      }
    })();
  }, []);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = teams.filter(function (item) {
        const itemData = (item.shortDisplayName && item.shortDisplayName.toLowerCase()) || '';
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredTeams(newData);
      setSearch(text);
    } else {
      setFilteredTeams(teams);
      setSearch(text);
    }
  };
  const renderItem = ({ item }) => {
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
        {showImage && <Image source={{ uri: item.logoHref }} style={{ width: 50, height: 50 }} />}
      </View>
    );
  };

  return (
    <View style={{}}>
      <Pressable onPress={() => dispatch(switchImage(!showImage))}>
        <Text>Store:{(showImage && 'true') || 'false'}</Text>
      </Pressable>

      <TextInput
        style={{}}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search a team"
      />
      <FlatList
        data={filteredTeams}
        renderItem={renderItem}
        keyExtractor={(item) => item.shortDisplayName}
      />
    </View>
  );
};
