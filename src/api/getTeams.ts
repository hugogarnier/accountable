import { Sport } from '../types/sport';
import { LightTeam } from '../types/team';

type Response = {
  sports: Sport[];
};
const getSports = async (): Promise<Response> => {
  try {
    const result = await fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
    const data = await result.json();
    return data;
  } catch (e) {
    return { sports: [] };
  }
};
export const lightTeams = async (): Promise<LightTeam[]> => {
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
