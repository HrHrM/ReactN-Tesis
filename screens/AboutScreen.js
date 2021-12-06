import React, { useCallback }           from 'react'
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
  Dimensions,
  Alert,
  Button,
  Linking,
  StyleSheet,
  TouchableHighlight}                   from 'react-native'    
import { Link } from 'native-base'

export const AboutScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon = {ArrowIosBackIcon} onPress = {navigateBack}/>
  );
  
  const handlePress = () => (
    Linking.openURL('https://github.com/HrHrM')
  )

  return (
    <SafeAreaView>
      <TopNavigation title = 'Acerca de la aplicación' alignment = 'center' accessoryLeft = {BackAction}/>
      <Divider/>
      <Layout style = {{justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView showsVerticalScrollIndicator = {false} >
          <View style = {{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}} >
            <Text style = {{fontSize: 24, fontWeight: '700', paddingHorizontal: 20, textAlign: 'center'}} >
              Detalles del desarrollador
            </Text>
            <TouchableHighlight underlayColor="#DDDDDD" onPress = {handlePress} >
              <View style = {{height: 300, marginTop: 20, paddingBottom: 15}}>
                <Image 
                  style  = {{flex: 1, height: 100, width: 200, resizeMode: 'cover', borderRadius: 40, borderWidth: 1, borderColor: '#dddd', alignSelf: 'center'}}
                  source = {require ('../assets/About/profile.png')} 
                />              
              </View>
            </TouchableHighlight>
            <View style = {{paddingBottom: 10}} >
              <TouchableHighlight underlayColor = '#DDDDDD' onPress = {handlePress}>
                <Text style = {{fontSize: 15, fontWeight: '500'}}>
                  Github: <Text style = {{color: '#4632A1'}}>  {'                        '}https://github.com/HrHrM</Text>
                </Text>
              </TouchableHighlight>
              <Text>Desarrollador principal:{'          '} Johnny Bohorquez</Text>
              <Text>Instituto: {'     '} Universidad Alejandro de Humboldt</Text>
              {/* <Text>Desarrollador auxiliar:   Gabriel Galati</Text> */}
            </View>
            <View style = {{flex: 1, backgroundColor: '#ffffff', paddingTop: 10,paddingBottom: 100}} >
              <Text style = {{fontSize: 24, fontWeight: '700', paddingHorizontal: 20, textAlign: 'center', paddingBottom: 10}} >
                Terminos de uso al usuario
              </Text>
              <Text style = {{paddingLeft: 10, paddingRight: 10, justifyContent: 'center', textAlign: 'justify', paddingBottom: 10}}>
                Estos Términos y Condiciones de Uso regulan las reglas a que se sujeta la utilización de la APP
                "Velou's Ear", que puede descargarse desde el dominio
                [app store link] La descarga o utilización de la APP atribuye la condición de
                Usuario a quien lo haga e implica la aceptación de todas las condiciones incluidas en este documento
                y en la Política de Privacidad y el Aviso Legal de dicha página Web. El Usuario debería leer estas
                condiciones cada vez que utilice la APP, ya que podrían ser modificadas en lo sucesivo.
              </Text>
              <Text style = {{paddingLeft: 10, paddingRight: 10, justifyContent: 'center', textAlign: 'justify', paddingBottom: 10}}>
                El desarrollador se reserva el derecho a realizar un seguimiento de tu
                actividad en la Aplicación de y a informar de ello a nuestros proveedores de servicios estadísticos de
                terceros. Todo ello de forma anónima.
              </Text>
              <Text style = {{paddingLeft: 10, paddingRight: 10, justifyContent: 'center', textAlign: 'justify', paddingBottom: 10}}>
                Queda prohibido alterar o modificar ninguna parte de la APP a de los contenidas de la misma, eludir,
                desactivar o manipular de cualquier otra forma (o tratar de eludir, desactivar o manipular) las
                funciones de seguridad u otras funciones del programa y utilizar la APP o sus contenidos para un fin
                comercial o publicitario. Queda prohibido el uso de la APP con la finalidad de lesionar bienes,
                derechos o intereses del desarrollador o de terceros. Queda igualmente prohibido realizar
                cualquier otro uso que altere, dañe o inutilice las redes, servidores, equipos, productos y programas
                informáticos del desarrollador o de terceros.
              </Text>
              <Text style = {{paddingLeft: 10, paddingRight: 10, justifyContent: 'center', textAlign: 'justify', paddingBottom: 10}}>
                IMPORTANTE: Podemos, sin que esto suponga ninguna obligación contigo, modificar estas
                Condiciones de uso sin avisar en cualquier momento. Si continúas utilizando la aplicación una vez
                realizada cualquier modificación en estas Condiciones de uso, esa utilización continuada constituirá la
                aceptación por tu parte de tales modificaciones. Si no aceptas estas condiciones de uso ni aceptas
                quedar sujeto a ellas, no debes utilizar la aplicación ni descargar o utilizar cualquier software
                relacionado. El uso que hagas de la aplicación queda bajo tu única responsabilidad. No tenemos
                responsabilidad alguna por la eliminación o la incapacidad de almacenar o trasmitir cualquier
                contenido u otra información mantenida o trasmitida por la aplicación. No somos responsables de la
                precisión o la fiabilidad de cualquier información o consejo trasmitidos a través de la aplicación.
                Podemos, en cualquier momento, limitar o interrumpir tu uso a nuestra única discreción. Hasta el
                máximo que permite la ley, en ningún caso seremos responsables por cualquier pérdida o daño
                relacionados.
              </Text>
              <Text style = {{fontSize: 15, fontWeight: '700', paddingHorizontal: 20, textAlign: 'right', paddingBottom: 50}} >
                -Johnny Bohorquez, creado el 29/11/21 - 
              </Text>
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