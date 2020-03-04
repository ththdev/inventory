import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screens
import SettingsContainer from '../containers/SettingsContainer'
import SettingsContaienr from '../containers/SettingsContainer'

function SettingsStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Settings" component={SettingsContaienr} />
        </Stack.Navigator>        
    )
}

export default SettingsStack