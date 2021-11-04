import React                        from 'react'  
import { View }                     from 'react-native'                          
import { ActivityIcon, 
         VideoIcon }                from '../../assets/icons'
import { BottomNavigation, 
         BottomNavigationTab, 
         Divider }                  from '@ui-kitten/components'
import { HomeScreen }               from '../screens/HomeScreen'
import { PictureScreen }            from '../screens/PictureScreen'
import { VoiceScreen }              from '../screens/VoiceScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

const BottomTabBar = ({ navigation, state }) => (
    <View>
        <Divider />
        <BottomNavigation appearance    = 'noIndicator'
                          selectedIndex = {state.index}
                          onSelect      = {index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title = 'Home'      icon = {ActivityIcon} />
            <BottomNavigationTab title = 'Pictures'  icon = {VideoIcon} />
        </BottomNavigation>
    </View>
)

export const BottomTabsNavigator = () => (
    <Navigator tabBar = {props => <BottomTabBar {...props} />}>
        <Screen name = 'Home'     component = {HomeScreen} />
        <Screen name = 'Pictures' component = {PictureScreen} />
        <Screen name = 'Voice'  component = {VoiceScreen} />
    </Navigator>
)
    