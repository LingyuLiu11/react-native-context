import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';

import ShowScreen from './src/screens/ShowScreen';

import {Provider as BlogProvider} from './src/screens/BlogContext';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Show"
        onPress={() => navigation.navigate('Show')}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider>
    <App></App>
  </BlogProvider>
};
