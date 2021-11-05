import React, { useState } from 'react'
import { View, 
         Button, 
         TextInput, 
         SafeAreaView, 
         ScrollView, 
         StyleSheet }      from 'react-native'
import Pp                  from './Pp'


export default function Tts() {

    const [ value, setValue ]       = useState('')
    const [ elements, setElements ] = useState([])
    const [ id, setId ]             = useState(0)

    return (
        <View>
            <View style = { {flex: 1} }>
       
            </View>

            <TextInput 
                style        = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder  = 'Type here'
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
                }}
                title = 'Lere'
                color = '#841584'
                accessibilityLabel = 'Learn more about this purple button'
            />
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
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 0,
    }
})