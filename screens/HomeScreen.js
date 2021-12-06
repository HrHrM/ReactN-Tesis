import React, { Alert }            from 'react'
import { 
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions, 
  ScrollView
  }                     from 'react-native'
import { MenuIcon }     from "../assets/icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import {  
  Divider, 
  Layout, 
  TopNavigation, 
  TopNavigationAction } from '@ui-kitten/components'
import { 
  useNavigation, 
  DrawerActions
  }                     from "@react-navigation/native"
import { 
    MaterialCommunityIcons, 
    MaterialIcons,
    AntDesign 
  }                     from "@expo/vector-icons"
import { 
  Button, 
  NativeBaseProvider }  from 'native-base'
import * as Speech      from 'expo-speech'
// import { auth }         from '../firebase';
// import { 
//   onAuthStateChanged, 
//   signOut 
//   }                     from '@firebase/auth';

export const HomeScreen = () => {

  // const Logout = async () => {
  //   try {
  //     await signOut(auth)
  //     console.log('Disconnected')
  //     Alert.alert('Desconectado correctamente')
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  const navigation = useNavigation()
  const navigateDetails = () => {
    navigation.navigate('Details')
  }
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon    = {MenuIcon}
      onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>

        <TopNavigation
          title         = "Inicio"
          alignment     = "center"
          accessoryLeft = {renderDrawerAction}
        />
      <Divider/>
      <ScrollView style={{ flex: 1 }} >
        {/* <ScrollView showsHorizontalScrollIndicator = {false} style ={{flex: 1}} > */}
          <Image source = {require('../assets/Home/3.png')} style = {style.Image} />
          {/* <Image style = {{}} source = {require('../assets/Home/3.png')} style = {style.Image2} /> */}
          {/* <View style = {style.indicatorContainer} >
           <View style ={[style.indicator, style.indicatorActive]}/>
           <View style ={style.indicator}/>
           <View style ={style.indicator}/>
          </View> */}
        {/* </ScrollView> */}
       <View style = {{height: 160}}>
        <View style = {{paddingHorizontal:20, paddingTop: 10, }}>
          <Text style = {style.title}>
            Bienvenido a
          </Text>
          <Text style = {style.title}>
            tu nueva voz, Velou
          </Text>
        </View>
        <View style = {{marginTop: 5, paddingHorizontal:20}}>
         <Text style = {style.textStyle}>Puedes usar mi voz para escribir tus  pensamientos o usar mis opciones predeterminadas</Text>
        </View>
        <NativeBaseProvider>
         <View style = {{flex: 1, justifyContent: 'center', paddingTop: 10}}>
          <Button style = {[style.voiceButton, style.shadowBtn, {shadowColor:'blue'}  ,]} onPress = {navigateDetails}>
           Ve a mi Voz
          </Button>

          {/* <Button style = {style.signOut} onPress = {Logout}> Desconectarse</Button> */}
          </View>
         </NativeBaseProvider>
       </View>

       </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  Image: {
    height: 360,
    width: '100%',
    borderBottomLeftRadius: 100,
    marginBottom: 0,
  },
  Image2: {
    height: 360,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: 'gray',
    marginHorizontal: 5,
    borderRadius: 5, 
  },
  indicatorActive: {
    backgroundColor: 'black',
     
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  textStyle: {
     fontSize: 11,
     color: 'gray',

  },
  voiceButton: {
    borderRadius: 20, 
    backgroundColor: '#4632A1',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.6,
    justifyContent: 'center',
  },
  shadowBtn: {
    shadowOffset:{width: 1, height:10},
    shadowOpacity: 10,
    shadowRadius: 3,
    elevation: 10,
  }
})

{/* <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4632A1' }}>
        <Button onPress = {navigateDetails}>Go to my Voice</Button>
      </Layout> */}