import React                    from 'react'
import { NavigationContainer }  from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen }           from './home.js'
import { DetailsScreen }        from './details.js'

const { Navigator, Screen } = createStackNavigator()

const HomeNavigator = () => (
  <Navigator headerMode = 'none'>
    <Screen name='Home'    component={HomeScreen}/>
    <Screen name='Details' component={DetailsScreen}/>
  </Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
)

