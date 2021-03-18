import React from 'react'
import { StyleSheet, Text, View,Button} from "react-native";
//import styles from "";




const ReportScreen =({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>Report Screen</Text>
            <Button title="Daily Running Report" onPress={()=> {navigation.navigate('Daily-running-report')}}></Button>
            <Button title="Weekly Running Report" onPress={()=> {navigation.navigate('Weekly-running-report')}}></Button>
            <Button title="Monthly Running Report" onPress={()=> {navigation.navigate('Monthly-running-report')}}></Button>

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
