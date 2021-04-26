import React, { useState } from 'react';
import { View, Button,TextInput, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Pp from './pp';

export default function Tts() {
  const [value, onChangeText] = useState('');
  const [elementos,setElementos] = useState([])
  const [id,setId] = useState(0);

  return (
    <View >
            <View style={{ height: 200}}>
            </View>

      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder = "Type here"
      onChangeText={text => {
        onChangeText(text)
        console.log(value)
      }}
      value={value}
    />
    <Button
  onPress={()=>{
var x = {
  id: id,
  palabra: value
}
setId(id+1)
   setElementos(elementos => [...elementos, x])
    console.log(elementos)
  }}
  title="Lere"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<SafeAreaView>
  <ScrollView style = {styles.scrollView}>
    {
      elementos.map((index)=>{
        return(
          <Pp key={index.id} text={index.palabra}/>
        )
      })
    }
  </ScrollView>    
</SafeAreaView>
   
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
})