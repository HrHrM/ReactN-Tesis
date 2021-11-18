import { 
  Button, 
  Divider, 
  Layout, 
  TopNavigation, 
  TopNavigationAction } from '@ui-kitten/components';
import { MenuIcon }     from "../assets/icons";
import React            from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  useNavigation, 
  DrawerActions }       from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const renderDrawerAction = () => (
    <TopNavigationAction
      icon    = {MenuIcon}
      onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <TopNavigation
          title         = "Home"
          alignment     = "center"
          accessoryLeft = {renderDrawerAction}
        />
      <Divider/>
      <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4632A1' }}>
        <Button onPress = {navigateDetails}>Go to my Voice</Button>
      </Layout>
    </SafeAreaView>
  );
};
