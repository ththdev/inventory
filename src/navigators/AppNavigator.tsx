import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Navigators
import BottomTabNavigator from './BottomTabNavigator'

function AppNavigator() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator