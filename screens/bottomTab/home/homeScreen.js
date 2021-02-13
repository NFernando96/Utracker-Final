import React from 'react'
import { StyleSheet, Text, View} from "react-native";
import styles from "./styles";


//need to implement vehicles live locations in h ome screen

const HomeScreen=({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            {/*<Button title="Go to details screen" onPress={()=> navigation.navigate('Details')}/>*/}
        </View>

    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });



export default HomeScreen;
