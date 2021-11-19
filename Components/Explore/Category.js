import React, {Component, useState} from 'react'
import * as Speech                  from 'expo-speech'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    Vibration
}                                   from 'react-native'

export default function Category ({ img, name }) {

    const imgpSpeak = () => {
        Speech.speak(name)
        Vibration.vibrate(10 * 70)
    }
    const stop = () => {
        Speech.stop()
    }

    return (
        <TouchableHighlight underlayColor="#DDDDDD" onPress = {imgpSpeak} onLongPress = {stop} >
            <View style = {{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddd', borderRadius: 20 }}>
                <View style = {{ flex: 2 }}>
                    <Image 
                    source = {img}
                    style  = {{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 20 }}/> 
                </View>
                    <View style = {{ flex: 1, paddingLeft: 10, paddingTop: 10}} >
                        <Text>
                          {name}
                        </Text>
                </View>
            </View>  
        </TouchableHighlight>
                  
    )

}