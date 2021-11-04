import React      from 'react'
import { Button } from 'react-native'
import * as Speech from 'expo-speech'

export default function Pp({ text = 'te' }) {
    const speak = () => {
        Speech.speak(text)
    }
    return(
        <Button 
            onPress            = {speak}
            title              = {text}
            color              = '#841584'
            accessibilityLabel = "Learn more about this purple button"
        />
    )
}