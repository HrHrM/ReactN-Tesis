import { 
  Divider, 
  Layout, 
  Text, 
  TopNavigation, 
  TopNavigationAction }     from '@ui-kitten/components';
import { ArrowIosBackIcon } from '../assets/icons'
import React                from 'react';
import { SafeAreaView }     from 'react-native-safe-area-context';
import Tts                  from '../Components/Tts'

export const StoryDetailsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon = {ArrowIosBackIcon} onPress = {navigateBack}/>
  );

  return (
    <SafeAreaView style = {{ flex: 1 }}>
      <TopNavigation title = 'My Voice' alignment = 'center' accessoryLeft = {BackAction}/>
      <Divider/>
      
      <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Text category = 'h1'>Welcome to my Voice</Text>
        
      </Layout>
      <Tts />
    </SafeAreaView>
  );
};