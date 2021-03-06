import React from 'react'
import { StyleSheet, Text, View} from "react-native";
//import styles from "";




const ReportScreen =({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>Report Screen</Text>
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



export default ReportScreen;
