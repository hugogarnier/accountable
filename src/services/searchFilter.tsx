import { LightTeam } from '../types/team';

export type SearchFilter = {
  text: string;
  data: LightTeam[];
  setFilteredData: (arg: LightTeam[]) => void;
  setSearch: (arg: string) => void;
};
export const searchFilter = ({ text, data, setFilteredData, setSearch }: SearchFilter) => {
  if (text) {
    const filteredData = data.filter((item) => {
      const itemData = (item.shortDisplayName && item.shortDisplayName.toLowerCase()) || '';
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(filteredData);
    return setSearch(text);
  }

  setFilteredData(data);
  return setSearch(text);
};
