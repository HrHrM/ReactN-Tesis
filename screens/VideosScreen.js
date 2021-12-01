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
import * as Speech                             from 'expo-speech'

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
          title         = "Mi voz"
          alignment     = "center"
          accessoryLeft = {renderDrawerAction}
        />
      <Divider/>
      <Layout style = {{ justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text category = 'h1'>Pictures of your need</Text> */}
        <ScrollView
          scrollEventThrottle = {16}
          showsVerticalScrollIndicator = {true}>
          <View style = {{flex: 1, backgroundColor: 'white' , paddingTop: 20}}>
            {Speech.speak('')}
            {console.log('Initialized pictures')}
            <Text style ={{fontSize:24, fontWeight:'700', paddingHorizontal: 20}}>
              ¿En que te puedo ayudar hoy con mi voz, Velou?
            </Text>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
                ¿Te puedo ayudar con opciones basicas?
              </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/please.png')}   name = 'Por favor' />
                <Category img = {require('../assets/Pictures/Gracias.jpg')}  name = 'Gracias' />
                <Category img = {require('../assets/Pictures/water.jpg')}    name = 'Necesito agua' />
                <Category img = {require('../assets/Pictures/food.jpg')}     name = 'Necesito comida' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'Necesito usar el baño' />
                <Category img = {require('../assets/Pictures/out.jpg')}      name = 'Necesito salir' />
                <Category img = {require('../assets/Pictures/help.jpg')}     name = 'Necesito ayuda' />
                <Category img = {require('../assets/Pictures/message.jpg')}  name = 'Necesito enviar un mensaje' />
                <Category img = {require('../assets/Pictures/shop.jpg')}     name = 'Necesito comprar algo' />
                <Category img = {require('../assets/Pictures/money.jpg')}    name = 'Necesito dinero' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado a una conversación?
            </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/hi.png')}       name = 'Hola' />
                <Category img = {require('../assets/Pictures/day.png')}      name = 'Buenos días' />
                <Category img = {require('../assets/Pictures/yes.png')}      name = 'Si' />
                <Category img = {require('../assets/Pictures/no.png')}       name = 'No' />
                <Category img = {require('../assets/Pictures/please.png')}   name = 'Por favor' />
                <Category img = {require('../assets/Pictures/how.png')}      name = '¿Cómo estás?' />
                <Category img = {require('../assets/Pictures/pleasure.jpg')} name = 'Mucho gusto' />
                <Category img = {require('../assets/Pictures/bye.jpg')}      name = 'Adios' />
                <Category img = {require('../assets/Pictures/later.png')}    name = 'Hasta luego' />
                <Category img = {require('../assets/Pictures/tomorrow.png')} name = 'Nos vemos Mañana' />
                <Category img = {require('../assets/Pictures/night.png')}    name = 'Buenas noches' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado al tiempo?
            </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/now.png')}       name = 'Ahora' />
                <Category img = {require('../assets/Pictures/before.png')}    name = 'Antes' />
                <Category img = {require('../assets/Pictures/after.png')}     name = 'Despues' />
                <Category img = {require('../assets/Pictures/InNight.png')}   name = 'En la noche' />
                <Category img = {require('../assets/Pictures/tomorrow.png')}  name = 'Mañana' />
                <Category img = {require('../assets/Pictures/today.png')}     name = 'Hoy' />
                <Category img = {require('../assets/Pictures/yesterday.png')} name = 'Ayer' />
                <Category img = {require('../assets/Pictures/inMorning.png')} name = 'En la mañana' />
                <Category img = {require('../assets/Pictures/early.jpg')}     name = 'Es muy temprano' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar a decir la hora?
            </Text>
            <View style = {{ height: 130, marginTop: 20, paddingBottom: 0 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/am.jpg')}    name = 'A.M.' />
                <Category img = {require('../assets/Pictures/pm.jpg')}    name = 'P.M.' />
                <Category img = {require('../assets/Pictures/1.jpg')}     name = 'Es la 1' />
                <Category img = {require('../assets/Pictures/2.jpg')}     name = 'Son las 2' />
                <Category img = {require('../assets/Pictures/3.jpg')}     name = 'Son las 3' />
                <Category img = {require('../assets/Pictures/4.jpg')}     name = 'Son las 4' />
                <Category img = {require('../assets/Pictures/5.jpg')}     name = 'Son las 5' />
                <Category img = {require('../assets/Pictures/6.jpg')}     name = 'Son las 6' />
                <Category img = {require('../assets/Pictures/7.jpg')}     name = 'Son las 7' />
                <Category img = {require('../assets/Pictures/8.jpg')}     name = 'Son las 8' />
                <Category img = {require('../assets/Pictures/9.jpg')}     name = 'Son las 9' />
                <Category img = {require('../assets/Pictures/10.jpg')}    name = 'Son las 10' />
                <Category img = {require('../assets/Pictures/11.jpg')}    name = 'Son las 11' />
                <Category img = {require('../assets/Pictures/12.jpg')}    name = 'Son las 12' />
                <Category img = {require('../assets/Pictures/am.jpg')}    name = 'A.M.' />
                <Category img = {require('../assets/Pictures/pm.jpg')}    name = 'P.M' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado al entretenimiento?
            </Text>
            <View style = {{ height: 130 , marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/read.jpg')}     name = 'Quiero leer' />
                <Category img = {require('../assets/Pictures/cook.jpg')}     name = 'Quiero cocinar algo' />
                <Category img = {require('../assets/Pictures/play.jpg')}     name = 'Quiero jugar a algo' />
                <Category img = {require('../assets/Pictures/write.jpg')}    name = 'Quiero escribir algo' />
                <Category img = {require('../assets/Pictures/paint.jpg')}    name = 'Quiero pintar algo' />
                <Category img = {require('../assets/Pictures/exercise.jpg')} name = 'Quiero ejercitarme' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado a eventos emergentes?
            </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/problem.jpg')}   name = 'Tengo un inconveniente' />
                <Category img = {require('../assets/Pictures/que.jpg')}       name = '¿Qué?' />
                <Category img = {require('../assets/Pictures/xq.jpg')}        name = '¿Por qué?' />
                <Category img = {require('../assets/Pictures/who.jpg')}       name = '¿Quien?' />
                <Category img = {require('../assets/Pictures/Gracias.jpg')}   name = 'Gracias por el gesto' />
                <Category img = {require('../assets/Pictures/help.jpg')}      name = 'Requiero ayuda' />
                <Category img = {require('../assets/Pictures/emer.jpg')}      name = 'Es una emergencia' />
                <Category img = {require('../assets/Pictures/police.jpg')}    name = 'Llama a la policia' />
                <Category img = {require('../assets/Pictures/ambulance.jpg')} name = 'Llama a una ambulancia' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado a dolores presentes?
            </Text>
            <View style = {{ height: 200 , marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/head.jpg')}    name = 'Tengo dolor de cabeza' />
                <Category img = {require('../assets/Pictures/arm.jpg')}     name = 'Me duele el brazo' />
                <Category img = {require('../assets/Pictures/leg.jpg')}     name = 'Me duele la pierna' />
                <Category img = {require('../assets/Pictures/stomach.jpg')} name = 'Me duele el estomago' />
                <Category img = {require('../assets/Pictures/neck.jpg')}    name = 'Me duele el cuello' />
                <Category img = {require('../assets/Pictures/foot.jpg')}    name = 'Me duele el pie' />
                <Category img = {require('../assets/Pictures/back.jpg')}    name = 'Me duele la espalda' />
              </ScrollView>
            </View>

            {/* <ScrollView showsVerticalScrollIndicator = {false} >
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
            </ScrollView> */}
            
          </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};
