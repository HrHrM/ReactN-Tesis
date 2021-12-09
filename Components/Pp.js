import React       from 'react'
import { 
    Vibration,
    StyleSheet,
    Dimensions,
    View
 }                 from 'react-native'
import { Button, NativeBaseProvider }  from 'native-base'
import * as Speech from 'expo-speech'

export default function Pp({ text }) {
    const speak = () => {
        Speech.speak(texto)
        Vibration.vibrate(10 * 60)  
    }
    const stop = () => {
        Speech.stop()
    }
    let texto
        if (text.length === 0) {
            texto = 'Boton de prueba'
        } else {
            texto = text
        }
    return(
        <NativeBaseProvider>
        <View style = {{}}>
            <Button 
                onPress            = {speak}
                onLongPress        = {stop}
                title              = {texto}
                accessibilityLabel = "Audio Button"
                style              = {style.button}
            >
                {texto}
            </Button>
        </View>  
        </NativeBaseProvider>
            
    )
}
const style = StyleSheet.create({
    button:{
        marginTop: 2,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: '#FFB949',
        width: 300,
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 30,
    },
})