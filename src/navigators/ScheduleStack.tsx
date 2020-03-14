import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screens
import ScheduleContainer from '../containers/ScheduleContainer'

const ScheduleStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Schedule" component={ScheduleContainer} />
        </Stack.Navigator>
    )
}

export default ScheduleStack