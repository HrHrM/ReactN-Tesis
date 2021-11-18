import React       from 'react'
import { 
    Button,
    Vibration
 }                 from 'react-native'
import * as Speech from 'expo-speech'

export default function Pp({ text }) {
    const speak = () => {
        Speech.speak(text)
        Vibration.vibrate(10 * 50)
    }
    return(
        <Button 
            onPress            = {speak}
            title              = {text}
            color              = '#841584'
            accessibilityLabel = "Audio Button"
        />
    )
}