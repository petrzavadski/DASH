import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from './src/context/BlogContext';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={({ navigation }) => ({
          title: 'Dashboard NK'

        })} 
        />

       
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () =>{
  return <Provider><App/></Provider>
};