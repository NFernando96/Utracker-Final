import React from 'react'
import {Button, StyleSheet, Text, View} from "react-native";
import PreviousLocationScreen from "./previousLocation/previousLocationScreen";

import {createStackNavigator} from "@react-navigation/stack";
//PreviousLocationStackScreen
//import MainStack from "../../../navigation/MainStack";
//import {PreviousLocationStackScreen} from "../../../navigation/MainStack";
const PreviousLocationStack = createStackNavigator();

//const Stack = createStackNavigator();






const LocationScreen=({navigation})=> {




    return (
        <View  style={styles.container} >
            <Text style={styles.text}>This is location screen</Text>
            {/*<Button title="Previous Location" onPress={()=> navigation.goBack(")}/>*/}

            <Button title="Previous Location" onPress={()=> {navigation.navigate('Previous-Location')}}/>
            <Button title="Previous Path" onPress={()=> navigation.navigate('Previous-path')}/>
        </View>

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="PreviousLocation" component={PreviousLocationScreen} />
        //         <Stack.Screen name="PreviousPath" component={PreviousPathScreen} />
        //         {/*<Stack.Screen name="Settings" component={Settings} />*/}
        //     </Stack.Navigator>
        // </NavigationContainer>




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



export default LocationScreen;
