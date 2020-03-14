import React from 'react'
import styled from 'styled-components/native'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import I18n from '../localization/i18n'

const Stack = createStackNavigator()

// Screens
import AddScreen from '../screens/AddScreen'

const AddStack = () => {
    
    const navigation = useNavigation()
    return (
        <Stack.Navigator 
            mode="card" 
            headerMode="screen"
            screenOptions={{
                headerLeft: () => (
                    <Button onPress={() => navigation.goBack()}>
                        <Text>{I18n.t('Cancel')}</Text>
                    </Button>
                )
            }}

        >
            <Stack.Screen 
                name="Add" 
                component={AddScreen} 
                options={{
                    title: I18n.t('New Item'),
                    ...TransitionPresets.ModalPresentationIOS
                }}
            />
        </Stack.Navigator>        
    )
}

const Button = styled.TouchableOpacity`
    margin-left: 20px;
`

const Text = styled.Text`
    font-size: 16px;
`

export default AddStack