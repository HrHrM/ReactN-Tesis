import React, {Component, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
}                                   from 'react-native'

export default function Category ({ img, name }) {

    return (
        <View style = {{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddd' }}>
            <View style = {{ flex: 2 }}>
                <Image 
                    source = {img}
                    style  = {{ flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
                      
            </View>
                <View style = {{ flex: 1, paddingLeft: 10, paddingTop: 10}} >
                    <Text>
                      {name}
                    </Text>

                </View>
        </View>        
    )

}