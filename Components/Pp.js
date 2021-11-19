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
        Speech.speak(text)
        Vibration.vibrate(10 * 60)
    }
    return(
        <NativeBaseProvider>
        <View style = {{}}>
            <Button 
                onPress            = {speak}
                title              = {text}
                accessibilityLabel = "Audio Button"
                style              = {style.button}
            >
                {text}
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