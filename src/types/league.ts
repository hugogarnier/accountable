import { Team } from './team';

export type League = {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  shortName: string;
  slug: string;
  teams: Team[];
};
