import {
  Avatar,
  Drawer,
  DrawerItem,
  IndexPath,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  Divider,
}                                from '@ui-kitten/components';
import {
  HomeIcon,
  InfoIcon,
  LoginIcon,
}                                from '../assets/icons';
import { AboutScreen }           from '../screens/AboutScreen';
import { BottomTabsNavigator }   from './BottomTabsNavigator'
import { LoginScreen }           from '../screens/LoginScreen';
import React, { useState }       from 'react';
import { RegisterScreen }        from '../screens/RegisterScreen';
import { SafeAreaView }          from 'react-native-safe-area-context';
import { 
  View, 
  StyleSheet,
  Image
  }                              from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { style }                 from 'dom-helpers';
import { auth }                  from '../firebase';
import { 
  onAuthStateChanged, 
  signOut 
  }                              from '@firebase/auth';
import { useAsyncStorage }       from '@react-native-async-storage/async-storage';
// import { Button, NativeBaseProvider } from 'native-base';

const { Navigator, Screen } = createDrawerNavigator();
 
const DrawerContent = ({ navigation, state }) => {
    
    const [user, setUser] = useState({})

    onAuthStateChanged( auth, (currentUser) => {
      setUser(currentUser)
    })

    // const Logout = async () => {
    //   try {
    //     await signOut(auth)
    //     console.log('Disconnected')
    //     Alert.alert('Desconectado correctamente')
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }

    const styles = useStyleSheet(themedStyles);  
    
    const Header = () => (   
      <Layout style   = {styles.header}>
          <View style = {styles.profileContainer}>
            <Avatar
              size   = "giant"
              source = {require("../assets/icon.png")}
            />
            <Text style = {styles.profileName} category = "h6">
              Velou's ear
            </Text>
          </View>
        </Layout>
    );

  return (
    <SafeAreaView>
      <Drawer
        header = {Header}        
          selectedIndex = {new IndexPath(state.index)}
          onSelect = {index => navigation.navigate(state.routeNames[index.row])}> 
          <DrawerItem title = 'Home'  accessoryLeft = {HomeIcon}/>
          <DrawerItem title = 'About' accessoryLeft = {InfoIcon}/>
          <DrawerItem title = 'Login' accessoryLeft = {LoginIcon}/>
        </Drawer>
        <Divider/>
        <Text style = {stylesW.Welcome}>Bienvenido </Text> 
        <Text style = {stylesW.emailColor}>{user?.email}</Text>
          <View>
            <Image
             source = {require('../assets/Home/sign.png')}
             style  = {{ height: 200, width: 200, alignSelf: 'center', bottom: -60, resizeMode: "contain"}}
             />
          </View>
        {/* <NativeBaseProvider>
          
            <View style= {{flex: 1}} onPress = {Logout} >
            <TouchableHighlight>
              <Button style = {stylesW.signOut} onPress = {Logout}> Desconectarse</Button>
            </TouchableHighlight>
            </View>
          
        </NativeBaseProvider> */}
    </SafeAreaView>
  )
};

export const HomeDrawerNavigator = () => (
  <Navigator drawerContent = {props => <DrawerContent {...props}/>}>
    <Screen name = 'Home'     component = {BottomTabsNavigator}/>
    <Screen name = 'About'    component = {AboutScreen}/>
    <Screen name = 'Login'    component = {LoginScreen}/>
    <Screen name = 'Register' component = {RegisterScreen}/>
  </Navigator>
);

 const themedStyles = StyleService.create({  
  header: {
    height:            128,
    paddingHorizontal: 16,
    justifyContent:    "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems:    "center",
  },
  profileName: {
    marginHorizontal: 16,
  },
  
  icon: {
    width:       22,
    height:      22,
    marginRight: 8,
  },
}); 
const stylesW = StyleSheet.create({
  Welcome:{
    paddingHorizontal: 30,
    paddingTop: 10,
    fontStyle: 'italic',
    fontSize: 15,
  },
  emailColor: {
    color: '#01A0D8',
    paddingHorizontal: 30,
    paddingTop: 10,
    fontStyle: 'italic',
    fontSize: 15,
  },
  brandView:{
    flex:           1,
    justifyContent: 'center',
    alignItems:     'center'
  },
}) 
