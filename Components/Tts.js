import React, { useState } from 'react'
import { View, 
         Dimensions, 
         TextInput, 
         SafeAreaView, 
         ScrollView, 
         StyleSheet }      from 'react-native'
import Pp                  from './Pp'
import { 
    Button, 
    NativeBaseProvider,
    Text 
}                          from 'native-base'
// import * as Speech         from 'expo-speech'


export default function Tts() {

    const [ value, setValue ]       = useState('')
    const [ elements, setElements ] = useState([])
    const [ id, setId ]             = useState(0)

    return (
        <NativeBaseProvider>
        <View>
            <View style = { {flex: 1, paddingBottom: 30} }>
                {/* {Speech.speak('')}
                {console.log('Initialized')} */}
            </View>

            <TextInput 
                style        = {styles.input}
                placeholder  = 'Escriba lo que quiere decir aquí'
                keyboardType = 'email-address'
                onChangeText = {text => {
                    setValue(text)
                    console.log(value)
                }}
                value        = {value} 
            />
            <Button 
                onPress = {() => {
                    var x = {
                        id: id,
                        word: value
                    }
                    setId(id + 1)
                    setElements(elements => [ ...elements, x ])
                    console.log(elements)
                    setValue('')
                }}
                title = 'Leer'
                color = '#4632A1'
                accessibilityLabel = 'Input button'
                style = {styles.button}
                
            >
                Leer
            </Button>
            <Button 
                onPress = {() => {
                    setElements([])
                }}
                title = 'Lere'
                color = '#4632A1'
                accessibilityLabel = 'Delete button'
                style = {styles.buttonDel}
            >
                Tap aquí para borrar sus previos pensamientos
            </Button>
            <SafeAreaView>
                <ScrollView style = {styles.scrollView}>
                    {
                        elements.map((index) => {
                            return (
                                <Pp key = {index.id} text = {index.word} />
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 0,
    },
    button:{
        borderRadius: 20, 
        backgroundColor: '#4632A1',
        alignSelf: 'center',
        width: 250,
        justifyContent: 'center',
        height: 40,
    },
    buttonDel: {
        borderRadius: 20, 
        backgroundColor: '#4632A1',
        alignSelf: 'center',
        width: 350,
        justifyContent: 'center',
        height: 40,
        marginTop: 20,
        marginBottom: 30,
    },
    input: {
        marginBottom: 20,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: 'white',
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        paddingLeft: 20,
    }
})