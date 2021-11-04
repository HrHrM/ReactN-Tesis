import React             from 'react'
import {
    ArrowIosBackIcon,
    MenuIcon
}                        from '../../assets/icons'
import {
    Divider,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction
}                       from '@ui-kitten/components'
import { SafeAreaView } from 'react-native-safe-area-context' 
import {
    useNavigation,
    DrawerActions
}                       from '@react-navigation/native'

export const PictureScreen = () => {
    const navigation = useNavigation()
    
    const renderDrawerAction = () => (
        <TopNavigationAction 
            icon    = {MenuIcon}
            onPress = {() => navigation.dispatch(DrawerActions.openDrawer)}
        />
    )

    return (
        <SafeAreaView style = {{ flex: 1 }}>
            <TopNavigation
                title         = 'Pictures of your need'
                alignment     = 'center'
                accessoryLeft = {renderDrawerAction}
            />
            <Divider />
            <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D6E4FF' }} >
                <Text category = 'h1' >

                </Text>
            </Layout>
        </SafeAreaView>
    )
}