import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

// Stacks
import HomeStack from './HomeStack'
import CollectionStack from './CollectionStack'
import SettingsStack from './SettingsStack'

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Collections" component={CollectionStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator