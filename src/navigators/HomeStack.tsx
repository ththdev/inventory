import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screens
import HomeContainer from '../containers/HomeContainer'

function HomeStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeContainer} />
        </Stack.Navigator>        
    )
}

export default HomeStack