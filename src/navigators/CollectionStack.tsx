import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screens
import CollectionContainer from '../containers/CollectionContainer'

function CollectionStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Collection" component={CollectionContainer} />
        </Stack.Navigator>        
    )
}

export default CollectionStack