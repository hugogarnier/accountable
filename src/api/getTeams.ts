import { Alert } from 'react-native';

import { Sport } from '../types/sport';
import { LightTeam } from '../types/team';

type Response = {
  sports: Sport[];
};
const getSports = async (): Promise<Response> => {
  try {
    const result = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
    const { sports }: { sports: Response['sports'] } = await result.json();
    return { sports };
  } catch (error) {
    Alert.alert('there was an error with the API');
    return { sports: [] };
  }
};
export const computeLightTeams = async (): Promise<LightTeam[]> => {
  try {
    const { sports } = await getSports();

    return sports[0].leagues[0].teams
      .map(({ team }) => {
        return { shortDisplayName: team.shortDisplayName, logoHref: team.logos[0].href };
      })
      .sort((a, b) => a.shortDisplayName.localeCompare(b.shortDisplayName));
  } catch (e) {
    return [];
  }
};
