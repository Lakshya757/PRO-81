import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator
        screenOptions={({ route })=>({
            tabBorIcon: ({focused, color, size}) =>{
                let iconName;

                if(route.name == 'Feed'){
                    iconName = focused ? 'book' : 'book-outline'
                }
                else if(route.name == 'CreatePost'){
                    iconName = focused ? 'create' : 'create-outline'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },

        })}
        tabOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray'
        }}
        >
            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='Create Post' component={CreatePost} />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;