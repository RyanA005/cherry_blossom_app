import { View, Text } from 'react-native';
import { colors } from '../utils/colors';

export function TestScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Test Screen</Text>
    </View>
  );
}
