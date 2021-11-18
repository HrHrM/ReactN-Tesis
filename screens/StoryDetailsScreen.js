import { 
  Divider, 
  Layout, 
  Text, 
  TopNavigation, 
  TopNavigationAction,
  Card }                    from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../assets/icons'
import React                from 'react';
import { SafeAreaView }     from 'react-native-safe-area-context';
import Tts                  from '../Components/Tts'
import { 
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
 }                          from 'react-native';

 
export const StoryDetailsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon = {ArrowIosBackIcon} onPress = {navigateBack}/>
  );


  return (
    <SafeAreaView style = {{ flex: 1, backgroundColor: 'white' }}>
    
      <TopNavigation title = 'My Voice' alignment = 'center' accessoryLeft = {BackAction}/>
      <Divider/>
      {/* <ImageBackground 
        source = {require('../assets/Login/night.jpg')}
        style  = {{ height: Dimensions.get('window').height / 2,}} > */}
      <ScrollView>
      
        <View style = {style.general}>
          <View style = {{flex: 1}}>
            <Text style ={style.title}>
              Velou, esta es mi voz
            </Text>
              <Tts/>
          </View>
        </View>
 
      
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  
  general: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    fontSize: 35,
    fontWeight: 'bold',
  },  
})

     {/* <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 1000, backgroundColor: '#FFFFFF' }}>
      
        <Text category = 'h1'>Welcome to my Voice</Text>
        <Card>
  
          <Tts />
  
        </Card>
        
      </View> */}