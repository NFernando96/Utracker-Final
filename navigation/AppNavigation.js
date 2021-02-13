import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import MainTabScreen from "./MainTabScreen";
import AboutScreen from "../screens/drawer/about/aboutScreen";
import ContactScreen from "../screens/drawer/contact/contactScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Drawer = createDrawerNavigator();

const ContactStack = createStackNavigator();


const ContactStackScreen = ({navigation}) =>(
    <ContactStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ContactStack.Screen name="Contact" component={ContactScreen} option={{
        }}/>
    </ContactStack.Navigator>
);






const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen} />
                {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Contact" component={ContactStackScreen} />
            </Drawer.Navigator>

        </NavigationContainer>
    );
}

export default AppNavigation;
