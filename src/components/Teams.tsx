import { useEffect, useState } from 'react';
import { FlatList, Switch, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { computeLightTeams } from '../api/getTeams';
import { searchFilter } from '../services/searchFilter';
import { switchImage } from '../store/actions/app.actions';
import { InitialState } from '../store/reducers/app.reducer';
import { LightTeam } from '../types/team';

import { Input } from './Input';
import { Team } from './Team';

export const Teams = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredTeams, setFilteredTeams] = useState<LightTeam[]>([]);
  const [teams, setTeams] = useState<LightTeam[]>([]);

  const showImage = useSelector<InitialState, boolean>((state) => state.showImages);
  const dispatch = useDispatch();

  const getTeams = async () => {
    setLoading(true);
    const response = await computeLightTeams();
    if (response) {
      setTeams(response);
      setFilteredTeams(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getTeams();
    })();
  }, []);

  const handleSwitch = () => {
    dispatch(switchImage(!showImage));
  };
  const renderItem = ({ item }: { item: LightTeam }) => {
    return <Team team={item} showImage={showImage} />;
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 30,
        }}
      >
        <Input
          value={search}
          onChangeText={(text) =>
            searchFilter({ text, data: teams, setFilteredData: setFilteredTeams, setSearch })
          }
        />
        <Switch
          trackColor={{ false: '#767577', true: '#DCE5EE' }}
          thumbColor={(showImage && '#274472') || '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleSwitch}
          value={showImage}
        />
      </View>

      <FlatList
        data={filteredTeams}
        renderItem={renderItem}
        keyExtractor={(item) => item.shortDisplayName}
        onRefresh={getTeams}
        refreshing={loading}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};
