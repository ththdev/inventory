import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AddStack from './AddStack'

const Stack = createStackNavigator()

const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Add" component={AddStack} />
        </Stack.Navigator>
    )
}

export default RootStack