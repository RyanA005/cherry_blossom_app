import { View, Text, Button } from 'react-native';
import { colors } from '../utils/colors';
// grab all the react native tools we need

// define the named component which can access navigation
export function StatsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tree Stats Page</Text>
      <Button
        title="Test screen"
        onPress={() => navigation.navigate('Test')}
        color={colors.primary}
      />
    </View>
  );
}
