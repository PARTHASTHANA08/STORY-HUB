import * as React from 'react';
import { render } from 'react-dom';
import {Text,View,TouchableOpacity,StyleSheet,TextInput}from 'react-native'
import * as Permissions from 'expo-permissions'
import {BarCodeScanne} from 'expo-barcode-scanner'
export default class WriteScreen extends React.Component{
    render(){
        return(
<View>
<TextInput style={styles.input1} placeholder="Title Of The Story"/>
<TextInput style={styles.input1} placeholder="Name Of The Author"/>
<TextInput style={styles.input2} placeholder="Type Your Story Here"/>
<TouchableOpacity></TouchableOpacity>
</View>
        );
    }
}
const styles = StyleSheet.create({
    input1:{
        width:200,
        height:50,
        borderWidth:5,
        borderRadius:5
    },
    input2:{
        width:200,
        height:300,
        borderWidth:5,
        borderRadius:5
    }
})