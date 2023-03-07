import { TextInput } from 'react-native';

type Input = {
  value: string;
  onChangeText: (text: string) => void;
};
export const Input = ({ value, onChangeText }: Input) => {
  return (
    <TextInput
      style={{
        paddingHorizontal: 20,
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: '#B9B7BD',
        borderRadius: 20,
        fontSize: 20,
      }}
      onChangeText={onChangeText}
      value={value}
      underlineColorAndroid="transparent"
      placeholder="Search a team"
    />
  );
};
