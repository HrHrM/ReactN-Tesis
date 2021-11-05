import { ArrowIosBackIcon, MenuIcon }          from '../assets/icons';
import { 
  Divider, 
  Layout, 
  Text, 
  TopNavigation, 
  TopNavigationAction }                        from '@ui-kitten/components';
import React                                   from 'react';
import { SafeAreaView }                        from 'react-native-safe-area-context';
import { useNavigation, DrawerActions }        from "@react-navigation/native";
import { 
  ScrollView, 
  View, 
  Image, 
  Dimensions
 }                                             from 'react-native';
import Category                                from '../Components/Explore/Category'

const { height, width } = Dimensions.get('window')

export const VideosScreen = () => {
  const navigation = useNavigation();

  const renderDrawerAction = () => (
    <TopNavigationAction
      icon    = {MenuIcon}
      onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  return (
    <SafeAreaView style = {{ flex: 1 }}>
      <TopNavigation
          title         = "My Pictures"
          alignment     = "center"
          accessoryLeft = {renderDrawerAction}
        />
      <Divider/>
      <Layout style = {{ justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text category = 'h1'>Pictures of your need</Text> */}
        <ScrollView
          scrollEventThrottle = {16}>
          <View style = {{flex: 1, backgroundColor: 'white' , paddingTop: 20}}>
            <Text style ={{fontSize:24, fontWeight:'700', paddingHorizontal: 20}}>
              What can I help you with my voice today, Velou?
            </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/water.jpg')} name = 'I need Water' />
                <Category img = {require('../assets/Pictures/food.jpg')}  name = 'I need Food' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'I need the bathroom' />
                <Category img = {require('../assets/Pictures/water.jpg')} name = 'I need Water' />
                <Category img = {require('../assets/Pictures/food.jpg')}  name = 'I need Food' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'I need the bathroom' />
              </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false} >
              <View style = {{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style = {{ fontSize: 24, fontWeight: '700' }} >
                Or maybe you need help with another thing 
              </Text>
              <Text style = {{ fontWeight: '100', marginTop: 10, textAlign: 'center' }}>
                Hello, I need some help
              </Text>
              <View style = {{ width: width - 40, height: 200, marginTop: 20}}>
                <Image
                  style  = {{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddd' }}
                  source = {require('../assets/Pictures/help.jpg')}
                />
              </View>
              <Text style = {{ fontWeight: '100', marginTop: 10, textAlign: 'center' }}>
                Please could you tell me what time it is?
              </Text>
              <View style = {{ width: width - 40, height: 300, marginTop: 20}}>
                <Image
                  style  = {{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddd' }}
                  source = {require('../assets/Pictures/time.jpg')}
                />
              </View>
              <Text style = {{ fontWeight: '100', marginTop: 10, textAlign: 'center' }}>
                Please could you tell me what time it is?
              </Text>
              <View style = {{ width: width - 40, height: 300, marginTop: 20, paddingBottom: 100}}>
                <Image
                  style  = {{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddd' }}
                  source = {require('../assets/Pictures/water.jpg')}
                />
              </View>
              
            </View>
            </ScrollView>
            
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};
