import React from 'react'
import { StyleSheet, Text, View} from "react-native";
//import styles from "";




const DeviceScreen=({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>Device Screen</Text>
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
 });



export default DeviceScreen;
