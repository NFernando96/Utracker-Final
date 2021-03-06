import React from 'react'
import {Button, StyleSheet, Text, View} from "react-native";
import PreviousLocationScreen from "./previousLocation/previousLocationScreen";

import {createStackNavigator} from "@react-navigation/stack";
//PreviousLocationStackScreen
//import MainStack from "../../../navigation/MainStack";
//import {PreviousLocationStackScreen} from "../../../navigation/MainStack";
const PreviousLocationStack = createStackNavigator();

//const Stack = createStackNavigator();

// const PreviousLocationStackScreen = ({navigation}) =>(
//     <PreviousLocationStack.Navigator screenOptions={{
//         headerStyle:{
//             backgroundColor:'#009387',
//         },
//         headerTintColor:'#fff',
//         headerTitleStyle:{
//             fontWeight:'bold'
//         }
//     }}>
//         <PreviousLocationStack.Screen name="Previous" component={PreviousLocationScreen} option={{
//         }}/>
//     </PreviousLocationStack.Navigator>
// );




const LocationScreen=({navigation})=> {
    return (
        <View style={styles.container}>
            <Text>This is location Main screen</Text>
            {/*<Button title="Previous Location" onPress={()=> navigation.goBack(")}/>*/}
            <Button title="Previous Location" onPress={()=> {navigation.push('previous-location')}}/>
            <Button title="Previous Path" onPress={()=> navigation.navigate('Details')}/>
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
});



export default LocationScreen;
