import React from 'react'
import { View, TouchableOpacity, Text, TouchableWithoutFeedback} from 'react-native'
import { createBottomTabNavigator, BottomTabBarProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'
import I18n from '../localization/i18n'

const Tab = createBottomTabNavigator()

// Stacks
import HomeStack from './HomeStack'
import ScheduleStack from './ScheduleStack'
import AddStack from './AddStack'
import CollectionStack from './CollectionStack'
import SettingsStack from './SettingsStack'
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'

const BottomTabNavigator = () => {
    const navigation = useNavigation()

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                tabStyle: {
                    paddingTop: 5
                },
                style: {
                    height: 95
                },
            }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeStack} 
                options={{
                    title: I18n.t('Home'),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Schedule" 
                component={ScheduleStack} 
                options={{
                    title: I18n.t('Schedule'),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="clock" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Add" 
                component={AddStack} 
                options={{
                    title: I18n.t('Add'),
                    tabBarButton: ({ children }) => (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Add')}>
                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 5 }}>
                                {children}
                            </View>
                        </TouchableWithoutFeedback>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Icon 
                            name="plus-square" 
                            color={color} 
                            size={size} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Collections" 
                component={CollectionStack} 
                options={{
                    title: I18n.t('Collections'),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingsStack} 
                options={{
                    title: I18n.t('Settings'),
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator