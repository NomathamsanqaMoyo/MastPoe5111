import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Login from './screens/Login';
import Payment from './screens/Payment';
import Reservation from './screens/Reservation';
import ChefsMenu from './screens/ChefsMenu';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Menu' component={Menu}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Payment' component={Payment}/>
      <Stack.Screen name='Reservation' component={Reservation}/>
      <Stack.Screen name='ChefsMenu' component={ChefsMenu}/>
    </Stack.Navigator>
    </NavigationContainer>
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
