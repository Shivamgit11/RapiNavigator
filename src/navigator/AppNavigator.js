import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SecondScreen from '../screens/SecondScreen';

const Navigator = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator.Navigator screenOptions={{headerShown: false}}>
                <Navigator.Screen name="Home" component={Home} />
                <Navigator.Screen name="SecondScreen" component={SecondScreen} />
            </Navigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;