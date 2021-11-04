import React            from 'react'
import { MenuIcon }     from  '../../assets/icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    Button,
    Divider,
    Layout,
    TopNavigation,
    TopNavigationAction,
}                       from '@ui-kitten/components'
import {
    useNavigation,
    DrawerActions
 }                      from '@react-navigation/native'

export const HomeScreen   = () => {
    const navigation      = useNavigation()
    const navigateDetails = () => {
        navigation.navigate('Voice')
    }
    const renderDrawerAction = () =>(
        <TopNavigationAction
            icon    = {MenuIcon}
            onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}   
        />
    )
    return(
        <SafeAreaView>
            <TopNavigation 
            title         = "My Silent Voice"
            alignment     = 'center' 
            accessoryLeft = {renderDrawerAction}    
        />
        <Divider />
        <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
            <Button onPress = {navigateDetails}>
                Go to my Voice
            </Button>
        </Layout>
        </SafeAreaView>
    )
}