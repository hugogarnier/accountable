import { Image, Text, View } from 'react-native';

import { LightTeam } from '../types/team';

type Team = {
  team: LightTeam;
  showImage: boolean;
};
export const Team = ({ team, showImage }: Team) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 70,
        padding: 20,
        backgroundColor: '#DCE5EE',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <Text style={{ fontSize: 24 }}>{team.shortDisplayName}</Text>
      {showImage && <Image source={{ uri: team.logoHref }} style={{ width: 70, height: 70 }} />}
    </View>
  );
};
