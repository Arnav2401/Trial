import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../navigators/Tab'
import PostScreen from '../screens/PostScreen';
const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.screen name='Home' component={TabNavigator} />
            <Stack.screen name='PostScreen' component={PostScreen} />
        </Stack.Navigator>
    )
}


export default StackNavigator