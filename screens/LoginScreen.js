import React                      from 'react'
import { ArrowIosBackIcon }       from '../assets/icons'
import { SafeAreaView }           from 'react-native-safe-area-context'
import { 
  MaterialCommunityIcons, 
  MaterialIcons,
  FontAwesome5 }                  from "@expo/vector-icons"
import {  
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
  StyleSheet,
  Alert }                        from 'react-native'
import { 
  Icon, 
  NativeBaseProvider,
  Input, 
  Checkbox,
  Center,
  Button }                        from 'native-base'



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

  const showAlert = () =>
  Alert.alert(
    "Aviso programado",
    "No se detecta conexión a internet, verifique su conexión e intente denuevo",
    [
      {
        text: "Firebase",
        onPress: () => Alert.alert("Firebase", 'No se detecta conexión a los servidores de Firebase, verifique su conexión e intente denuevo'),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'Alerta cancelada', "Verificación cancelada"
        ),
    }
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
                  as    ={FontAwesome5}
                  name  ="sign-language"
                  size  ={16}
                  color ="#ffffff"
                 _dark  ={{
                  color: "warmGray.50",
                 }}
                /> 
              <Text style = {styles.brandViewText}>Login para usar mi voz, Velou</Text>
              </View>

            </ImageBackground>

            <View style = {styles.bottomView}>
                
                <View style = {{padding: 30}}>
                  <Text style = {{color: '#4632A1', fontSize: 20}} >Bienvenido, Velou.</Text>
                    <Text style = {{color: 'black', fontStyle: 'italic'}} >
                      Ingrese sus datos para poder entrar en su cuenta. 
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
                    {/* <View style = {{flex:1, marginLeft: 0}}>
                      <Text style = {{color: '#8f9195', alignSelf: 'flex-end'}} >
                        ¿Olvido su contraseña?
                      </Text>
                    </View> */}
                    <View style = {{flex:1, marginLeft: 0}}>
                      <Text style = {{color: '#8f9195', alignSelf: 'flex-start'}} >
                       <Checkbox checked = {false} color = 'black' aria-label = 'Remember me'
                                 style = {{width: 17, height: 17}} />
                       {'  '}Recuerdame
                      </Text>
                    </View>
                  </View>
                  <View style = {styles.loginButton} >
                    <Button onPress = {showAlert}  style = {[styles.Button, styles.shadowBtn, {shadowColor:'#00acee'},]} >
                      <Text style = {{fontSize: 20, color: '#FFFFFF'}} >Login</Text>
                    </Button>
                  </View>
                  <View style = {styles.loginButton}>
                  <Text style = {{textAlign: 'center', padding: 20}}>¿No tiene una cuenta?
                    <Text style = {{color: '#4632A1', fontStyle: 'italic', textAlign: 'center'}} >
                     {' '} 
                     Registrese ahora 
                     </Text>
                  </Text>
                    <Button style = {[styles.regButton, styles.shadowBtn, {shadowColor:'purple'},]} onPress = {navigateRegister}>
                      <Text style = {{fontSize: 20, color: '#FFFFFF'}}>Registrarse</Text>
                    </Button>
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
    justifyContent: 'center',
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
  loginButton: {
    height: 70, 
    justifyContent: 'center', 
    alignItems: 'center'},
  Button: {
    borderRadius: 20, 
    backgroundColor: '#4632A1',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  regButton: {
    borderRadius: 20, 
    backgroundColor: '#4632A1',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  shadowBtn: {
    shadowOffset:{width: 1, height:10},
    shadowOpacity: 10,
    shadowRadius: 3,
    elevation: 15,
  }
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