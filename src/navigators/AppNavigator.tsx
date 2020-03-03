import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Navigators
import HomeStack from './HomeStack'

function AppNavigator() {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}

export default AppNavigator