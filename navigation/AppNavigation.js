import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import MainTabScreen from "./MainTabScreen";
import AboutScreen from "../screens/drawer/about/aboutScreen";
import ContactScreen from "../screens/drawer/contact/contactScreen";
import PreviousLocationScreen from "../screens/bottomTab/loacation/previousLocation/previousLocationScreen";
import PreviousPathScreen from "../screens/bottomTab/loacation/previousPath/previousPathScreen";
import DailyRunningReportScreen from "../screens/bottomTab/reports/dailyRunningReport/dailyRunningReportScreen";
import MonthlyRunningReportScreen from "../screens/bottomTab/reports/monthlyRunningReport/monthlyRunningReportScreen";
import WeeklyRunningReportScreen from "../screens/bottomTab/reports/weeklyRunningReport/weeklyRunningReportScreen";

import DrawerContent from "./DrawerContent"
import {createStackNavigator} from "@react-navigation/stack";
import MainTab from "./DrawerContent";

const Drawer = createDrawerNavigator();

const ContactStack = createStackNavigator();
const PreviousLocationStack = createStackNavigator();
const AboutStack = createStackNavigator();
const PreviousPathStack = createStackNavigator();
const DailyRunningReportStack = createStackNavigator();
const MonthlyRunningReportStack = createStackNavigator();
const WeeklyRunningReportStack = createStackNavigator();

const Stack = createStackNavigator();


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
        <ContactStack.Screen name="Contact" component={ContactScreen} options={{
            title:'Contact',
            headerLeft:()=>(
                <Icon.Button name="arrow-back"
                             size={25}
                              backgroundColor ="#009387"
                             onPress={()=>navigation.navigate('Home')}>
                             </Icon.Button>
            )
        }}/>
    </ContactStack.Navigator>
);



const AboutStackScreen = ({navigation}) =>(
    <AboutStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <AboutStack.Screen name="About" component={AboutScreen} options={{
            title:'About',
            headerLeft:()=>(
                <Icon.Button name="arrow-back"
                             size={25}
                             backgroundColor ="#009387"
                             onPress={()=>navigation.navigate('Home')}>
                </Icon.Button>
            )
        }}/>
    </AboutStack.Navigator>
);



const PreviousLocationStackScreen = ({navigation}) =>(
    <PreviousLocationStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <PreviousLocationStack.Screen name="Previous-Location1" component={PreviousLocationScreen} options={{
            title:'Previous-location',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Location')}>
                </Icon.Button>
            )
        }}/>
    </PreviousLocationStack.Navigator>
);


const PreviousPathStackScreen = ({navigation}) =>(
    <PreviousPathStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <PreviousPathStack.Screen name="Previous-path" component={PreviousPathScreen} options={{
            title:'Previous-path',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Location')}>
                </Icon.Button>
            )
        }}/>
    </PreviousPathStack.Navigator>
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DailyRunningReportStackScreen = ({navigation}) =>(
    <DailyRunningReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <DailyRunningReportStack.Screen name="Daily-running-report" component={DailyRunningReportScreen} options={{
            title:'Daily-running-report',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Report')}>
                </Icon.Button>
            )
        }}/>
    </DailyRunningReportStack.Navigator>
);


const WeeklyRunningReportStackScreen = ({navigation}) =>(
    <WeeklyRunningReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <WeeklyRunningReportStack.Screen name="Weekly-running-report" component={WeeklyRunningReportScreen} options={{
            title:'Weekly-running-report',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Report')}>
                </Icon.Button>
            )
        }}/>
    </WeeklyRunningReportStack.Navigator>
)



const MonthlyRunningReportStackScreen = ({navigation}) =>(
    <MonthlyRunningReportStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <MonthlyRunningReportStack.Screen name="Monthly-running-report" component={MonthlyRunningReportScreen} options={{
            title:'Monthly-running-report',
            headerLeft:()=>(
                <Icon.Button  name="arrow-back"
                              size={25}
                              backgroundColor ="#009387"
                              onPress={()=>navigation.navigate('Report')}>
                </Icon.Button>
            )
        }}/>
    </MonthlyRunningReportStack.Navigator>
);










const AppNavigation = () =>{
    return(
        <NavigationContainer>
            {/*<Drawer.Navigator initialRouteName="Home">*/}
                <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={MainTabScreen} />
                {/*<Drawer.Screen name="Details" component={DetailsStackScreen} />*/}
                <Drawer.Screen name="About" component={AboutStackScreen} />
                <Drawer.Screen name="Contact" component={ContactStackScreen} />

                <Drawer.Screen name="Previous-Location" component={PreviousLocationStackScreen} />
                <Drawer.Screen name="Previous-path" component={PreviousPathStackScreen} />

                    <Drawer.Screen name="Daily-running-report" component={DailyRunningReportStackScreen} />
                    <Drawer.Screen name="Weekly-running-report" component={WeeklyRunningReportStackScreen} />
                    <Drawer.Screen name="Monthly-running-report" component={MonthlyRunningReportStackScreen} />

                {/*    <Stack.Screen name="previous-location" component={PreviousLocationScreen} />*/}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
