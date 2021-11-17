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
          title         = "Mi voz"
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
              ¿En que te puedo ayudar hoy con mi voz, Velou?
            </Text>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
                ¿Te puedo ayudar con opciones basicas?
              </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/water.jpg')}    name = 'Necesito agua' />
                <Category img = {require('../assets/Pictures/food.jpg')}     name = 'Necesito comida' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'Necesito usar el baño' />
                <Category img = {require('../assets/Pictures/out.jpg')}      name = 'Necesito salir' />
                <Category img = {require('../assets/Pictures/help.jpg')}     name = 'Necesito ayuda' />
                <Category img = {require('../assets/Pictures/message.jpg')}  name = 'Necesito enviar un mensaje' />
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
                <Category img = {require('../assets/Pictures/how.png')}      name = '¿Cómo estas?' />
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
                <Category img = {require('../assets/Pictures/food.jpg')}      name = 'Mañana' />
                <Category img = {require('../assets/Pictures/today.png')}     name = 'Hoy' />
                <Category img = {require('../assets/Pictures/yesterday.png')} name = 'Ayer' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')}  name = 'En la mañana' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')}  name = 'Es muy tarde' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')}  name = 'Es muy temprano' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado a la hora del reloj?
            </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/water.jpg')}    name = 'I need Water' />
                <Category img = {require('../assets/Pictures/food.jpg')}     name = 'I need Food' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'I need the bathroom' />
                <Category img = {require('../assets/Pictures/water.jpg')}    name = 'I need Water' />
                <Category img = {require('../assets/Pictures/food.jpg')}     name = 'I need Food' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'I need the bathroom' />
              </ScrollView>
            </View>
            <Text style ={{fontSize:15, fontWeight:'700', paddingHorizontal: 20, paddingTop: 10}}>
              ¿Te puedo ayudar con algo relacionado al entretenimiento?
            </Text>
            <View style = {{ height: 130, marginTop: 20 }}>
              <ScrollView horizontal = {true} 
                          showsHorizontalScrollIndicator = {false} >
                <Category img = {require('../assets/Pictures/water.jpg')}    name = 'I need Water' />
                <Category img = {require('../assets/Pictures/food.jpg')}     name = 'I need Food' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'I need the bathroom' />
                <Category img = {require('../assets/Pictures/water.jpg')}    name = 'I need Water' />
                <Category img = {require('../assets/Pictures/food.jpg')}     name = 'I need Food' />
                <Category img = {require('../assets/Pictures/bathroom.jpg')} name = 'I need the bathroom' />
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
