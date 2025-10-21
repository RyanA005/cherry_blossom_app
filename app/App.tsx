import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from './src/utils/colors';
// import modules we want

import { TreesScreen } from './src/screens/TreesScreen';
import { StatsScreen } from './src/screens/StatsScreen';
import { TestScreen } from './src/screens/TestScreen';
// importing the screens we want as named components

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// we define the tab navigators and regular stack navigators with the pages avaliable
// components described in either are naviagble with code like the line below:
// navigation.navigate('some_screen')

// tab navigator component
function TabNavigator() {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
      }}
    >
      <Tab.Screen
        name="Trees"
        component={TreesScreen}
        options={{
          tabBarLabel: 'Trees',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={StatsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id={undefined}
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            color: colors.text,
          },
          
        }}
      >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{
            title: 'Test Screen'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
