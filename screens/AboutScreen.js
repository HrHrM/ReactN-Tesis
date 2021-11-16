import React                            from 'react'
import { SafeAreaView }                 from 'react-native-safe-area-context'
import { 
  Divider,
  Layout,
  Text, 
  TopNavigation, 
  TopNavigationAction }                 from '@ui-kitten/components'
import { ArrowIosBackIcon, MenuIcon }   from '../assets/icons'
import { useNavigation, DrawerActions } from '@react-navigation/core'
import {
  ScrollView,
  View,
  Image,
  Dimensions }                          from 'react-native'    

export const AboutScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon = {ArrowIosBackIcon} onPress = {navigateBack}/>
  );

  return (
    <SafeAreaView>
      <TopNavigation title = 'Acerca de la aplicación' alignment = 'center' accessoryLeft = {BackAction}/>
      <Divider/>
      <Layout style = {{justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView showsVerticalScrollIndicator = {false} >
          <View style = {{flex: 1, backgroundColor: '#ffffff', paddingTop: 20}} >
            <Text style = {{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}} >
              Datos acerca del programador
            </Text>
            <View style = {{height: 130, marginTop: 20}} >
              <Image 
                style = {{}}
              />
            </View>
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

{/* <SafeAreaView style = {{ flex: 1 }}>
      <TopNavigation title = 'Story' alignment = 'center' accessoryLeft = {BackAction}/>
      <Divider/>
      <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category = 'h1'>About</Text>
      </Layout>
    </SafeAreaView> */}