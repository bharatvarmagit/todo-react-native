import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/screens/Home';
import {AddTask} from '../components/screens/addTask';
import Header from '../components/shared/header';
import Draggable  from '../components/screens/draggable-list'
const Stack = createStackNavigator();


function routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen name="AddTask" component={AddTask} />
        <Stack.Screen name="Drag" component={Draggable}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default routes;
