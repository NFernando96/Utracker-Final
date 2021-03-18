import React,{useState} from 'react'
import {Button, StyleSheet, Text, View,TextInput} from "react-native";

//import styles from "";




const DeviceScreen=({navigation})=> {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}> This is Device Screen</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
            {/*<Button title="View Device"></Button>*/}
            {/*<Button title="Add Device"></Button>*/}
            {/*<Button title="Remove Device"></Button>*/}
        </View>
    );
}


 const styles = StyleSheet.create({
     container: {
         flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
        justifyContent: 'center',
     },
     text:{
         fontSize:30,
     }
 });



export default DeviceScreen;
