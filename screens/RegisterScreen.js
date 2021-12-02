import React, {useState}    from 'react'
import { ArrowIosBackIcon } from '../assets/icons'
import { SafeAreaView }     from 'react-native-safe-area-context'
import { 
  MaterialCommunityIcons, 
  MaterialIcons,
  AntDesign }               from "@expo/vector-icons"
import { 
  Divider, 
  Layout, 
  TopNavigation, 
  TopNavigationAction }     from '@ui-kitten/components'
import {
  ScrollView,
  Text,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  Alert,
  TouchableHighlight }      from 'react-native'
import {
  Icon,
  NativeBaseProvider,
  Input,
  Checkbox,
  Center,
  Button }                  from 'native-base'
// import { auth }             from '../firebase'
import { 
  createUserWithEmailAndPassword 
  }                         from 'firebase/auth'
import { auth }             from '../firebase'

export const RegisterScreen = ({ navigation }) => {

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [name, setName]         = useState('')
  const [lastName, setLastName] = useState('')

  const Registration = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password,
        name,
        lastName
      );
      console.log(user)
      Alert.alert('Usario creado', `${email} fue creado registrado correctamente`)
      navigateHome()
    } catch (error) {
      console.log(error.message)
    }
  };

  const navigateBack = () => {
    navigation.goBack()
  }
  const navigateAbout = () => {
    navigation.navigate('About')
  };
  const navigateHome = () => {
    navigation.navigate('Home')
  }

  const BackAction = () => (
    <TopNavigationAction icon = {ArrowIosBackIcon} onPress = {navigateBack}/>
  )

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
    <SafeAreaView style = {{ flex: 1 }}>
      <NativeBaseProvider>
        <ScrollView style = {{ flex: 1, backgroundColor: '#ffffff' }} showsVerticalScrollIndicator = {false} >
          <TopNavigation title = 'Registro' alignment = 'center' accessoryLeft = {BackAction}/>
          <Divider/>
            <ImageBackground
              source = {require('../assets/Login/moon.jpg')}
              style  = {{ height: Dimensions.get('window').height / 3,}}>

              <View style = {styles.brandView}>
                <Icon
                  as    ={AntDesign}
                  name  ="antdesign"
                  size  ={16}
                  color ="#ffffff"
                 _dark  ={{
                  color: "warmGray.50",
                 }}
                /> 
              <Text style = {styles.brandViewText}>Bienvenido al registro de mi voz</Text>
              </View>
            </ImageBackground>
            <View style = {styles.bottomView}>
                
                <View style = {{padding: 30}}>
                  <Text style = {{color: '#4632A1', fontSize: 20}} >Futuro Velou, registre sus datos.</Text>
                    <Text style = {{color: 'black', fontStyle: 'italic'}} >
                       Sus datos seran usados para futura referencia
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
                      value        = {email}
                      onChangeText = {(text) => setEmail(text)}
                      
                    />
                    <Text style = {{color: '#BCBCBC', fontSize: 12, marginTop: 6}}>
                    Porfavor coloque su nombre(s)
                  </Text>
                    <Input 
                      label        = 'name'
                      placeholder  = 'Geoff Marcon'
                      status       = 'Control'
                      keyboardType = 'default'
                      style        = {styles.inputPass}
                      value        = {name}
                      onChangeText = {(text) => setName(text)}
                    />
                    <Text style = {{color: '#BCBCBC', fontSize: 12, marginTop: 6}}>
                    Porfavor coloque su apellido(s)
                  </Text>
                    <Input 
                      label        = 'last name'
                      placeholder  = 'Keighley'
                      status       = 'Control'
                      keyboardType = 'default'
                      style        = {styles.inputPass}
                      value        = {lastName}
                      onChangeText = {(text) => setLastName(text)}
                    />
                    <Text style = {{color: '#BCBCBC', fontSize: 12, marginTop: 6}}>
                    Porfavor coloque su contraseña
                  </Text>
                    <Input 
                      label        = 'Password'
                      placeholder  = 'Contraseña'
                      status       = 'Control'
                      keyboardType = 'default'
                      style        = {styles.inputPass}
                      value        = {password}
                      onChangeText = {(text) => setPassword(text)}
                    />
                  </View>
                  <View style = {styles.forgotPassView} >
                    {/* <View style = {{flex:1, marginLeft: 0}}>
                      <Text style = {{color: '#8f9195', alignSelf: 'flex-end'}} >
                        ¿Olvido su contraseña?
                      </Text>
                    </View> */}
                    <View style = {{flex:1, marginLeft: 0}}>
                      <TouchableHighlight underlayColor="#DDDDDD" onPress = {navigateAbout}>
                        <Text style = {{color: '#4632A1', alignSelf: 'center', fontStyle: 'italic', textAlign: 'center'}} >
                         {/* <Checkbox checked = {false} color = 'black' aria-label = 'Remember me'
                                   style = {{width: 17, height: 17}} /> */}
                          Al Registrarse esta aceptando mis terminos de uso (tap para leerlos)
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  <View style = {styles.loginButton} >
                    <Button onPress = {Registration}  style = {[styles.Button, styles.shadowBtn, {shadowColor:'#00acee'},]} >
                      <Text style = {{fontSize: 20, color: '#FFFFFF'}} >Registrarse</Text>
                    </Button>
                  </View>
                </View>
            </View>
        </ScrollView>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

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
    bottom:40,
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

{/* <TopNavigation title = 'Register' alignment = 'center' accessoryLeft = {BackAction}/>
<Divider/>
<Layout style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text category = 'h1'>Register</Text>
</Layout> */}