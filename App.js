import { StatusBar } from 'expo-status-bar';

import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllPlacesScreen from './screens/AllPlacesScreen';
import ManageFavoritePlaces from './screens/ManageFavoritePlaces';

import { Provider } from 'react-redux';
import store from './store/store';

import HeaderIcon from './components/UI/HeaderIcon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{presentation: 'modal'}}>
            <Stack.Screen
              component={AllPlacesScreen}
              name="AllPlacesSreen"
              options={({ navigation }) => ({
                title: 'Your Favorite Places',
                headerRight: ({ tintColor }) => {
                  return (
                    <HeaderIcon
                      color={tintColor}
                      name="add"
                      size={25}
                      onPress={function test() {
                        navigation.navigate('ManageFavoritePlaces');
                      }}
                    />
                  );
                },
                headerStyle: { backgroundColor: 'aqua' },
                headerTintColor: 'black',
              })}
            />
            <Stack.Screen
              component={ManageFavoritePlaces}
              name="ManageFavoritePlaces"
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
