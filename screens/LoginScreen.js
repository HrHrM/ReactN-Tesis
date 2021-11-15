import React                      from 'react'
import { ArrowIosBackIcon }       from '../assets/icons'
import { SafeAreaView }           from 'react-native-safe-area-context'
import { 
  MaterialCommunityIcons, 
  MaterialIcons }                 from "@expo/vector-icons"
import { 
  Button, 
  Divider, 
  Layout, 
  TopNavigation, 
  TopNavigationAction }           from '@ui-kitten/components'
import { 
  ScrollView, 
  Text, 
  ImageBackground, 
  Dimensions,
  View, 
  StyleSheet }                    from 'react-native'
import { 
  Icon, 
  NativeBaseProvider,
  Input }                        from 'native-base'



export const LoginScreen = ({ navigation }) => {
  
  const navigateRegister = () => {
    navigation.navigate('Register')
  };

  const navigateBack = () => {
    navigation.goBack()
  };

  const BackAction = () => (
    <TopNavigationAction icon = {ArrowIosBackIcon} onPress = {navigateBack}/>
  );

    return (
      <SafeAreaView style = {{ flex: 1 }} >

        <NativeBaseProvider>
          <ScrollView style = {{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator = {false}>
          <TopNavigation title = 'Login' alignment = 'center' accessoryLeft = {BackAction}/>
          <Divider/>
            <ImageBackground
              source = {require('../assets/Login/night.jpg')}
              style  = {{ height: Dimensions.get('window').height / 1.7,}}>

              <View style = {styles.brandView}>
                <Icon
                  as    ={MaterialCommunityIcons}
                  name  ="login"
                  size  ={16}
                  color ="#ffffff"
                 _dark  ={{
                  color: "warmGray.50",
                 }}
                /> 
              <Text style = {styles.brandViewText}>Login to my voice, Velou</Text>
              </View>

            </ImageBackground>

            <View style = {styles.bottomView}>
                
                <View style = {{padding: 30}}>
                  <Text style = {{color: '#4632A1', fontSize: 20}} >Bienvenido</Text>
                  <Text>¿No tiene una cuenta?
                    <Text style = {{color: 'purple', fontStyle: 'italic'}} >
                     {' '} 
                     Registrese ahora 
                     </Text>
                  </Text>
                  <View style = {styles.formContainer}>
                  <Text style = {{color: '#BCBCBC', fontSize: 12}}>
                    Porfavor coloque su e-mail
                  </Text>
                    <Input 
                      label        = 'E-mail'
                      placeholder  = 'design@test.com'
                      status       = 'Control'
                      keyboardType = 'email-address'
                      rightElement = 'alternate-email'
                      style        = {styles.inputEmail}
                      
                    />
                    <Text style = {{color: '#BCBCBC', fontSize: 12, marginTop: 6}}>
                    Porfavor coloque su contraseña
                  </Text>
                    <Input 
                      label        = 'Password'
                      placeholder  = 'Contraseña'
                      status       = 'Control'
                      keyboardType = 'visible-password'
                      style        = {styles.inputPass}
                    />
                  </View>
                  <View style = {styles.forgotPassView} >
                    <View style = {{flex:1, marginLeft: 20}}>
                    
                    </View>
                  </View>
                </View>
            </View>
          </ScrollView>
        </NativeBaseProvider>
    
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  brandView:{
    flex:           1,
    justifyContent: 'center',
    alignItems:     'center'
  },
  brandViewText:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  bottomView:{
    flex: 1.5,
    backgroundColor: '#FFFFFF',
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  formContainer: {
    flex: 1,
    marginTop: 15,
  },
  inputEmail: {
    borderColor: 'transparent', 
    borderBottomColor: 'black', 
    marginTop: 1
  },
  inputPass: {
    borderColor: 'transparent', 
    borderBottomColor: 'black', 
    marginTop: 1
  },
  forgotPassView: {
    height: 50,
    marginTop: 20,
    flexDirection: 'row',
  },
})
  // return (
  //   <SafeAreaView style = {{ flex: 1 }}>
  //     <TopNavigation title = 'Login' alignment = 'center' accessoryLeft = {BackAction}/>
  //     <Divider/>
  //     <Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Button onPress = {navigateRegister}>Go to Register</Button>
  //     </Layout>
  //   </SafeAreaView>
  // );
// }