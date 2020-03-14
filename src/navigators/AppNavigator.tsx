import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Navigators
import BottomTabNavigator from './BottomTabNavigator'
import AddStack from './AddStack'

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator mode='modal' headerMode="none">
                <Stack.Screen name="Main" component={BottomTabNavigator} />
                <Stack.Screen 
                    name="Add" 
                    component={AddStack} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator