import { League } from './league';

export type Sport = {
  id: string;
  uid: string;
  name: string;
  slug: string;
  leagues: League[];
};
