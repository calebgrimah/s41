import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Image} from 'expo-image';

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, {useCallback} from "react";
import {StyleSheet, Text} from "react-native";
import HomeIcon from "./src/components/HomeIcon";
import {appLogo, ColorConstants, FontConstants, Screens, SizeConstants,} from "./src/constants/AppConstants";
import HomeScreen from "./src/views/home/Home";
import LibraryScreen from "./src/views/library/Library";
import MenuScreen from "./src/views/menu/Menu";
import SearchScreen from "./src/views/search/Search";
import MenuIcon from "./src/components/MenuIcon";
import LibraryIcon from "./src/components/LibraryIcon";
import SearchIcon from "./src/components/SearchIcon";

SplashScreen.preventAutoHideAsync();


export default function App() {
    const Tab = createBottomTabNavigator();

    const [fontsLoaded, fontError] = useFonts({
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <NavigationContainer onReady={onLayoutRootView}>
            {/*<Text style={{ fontFamily: "Poppins-Bold" }}>*/}
            {/*Open up App.tsx to start working on your app!*/}
            {/*</Text>*/}
            <Tab.Navigator
                initialRouteName={Screens.Home}

                screenOptions={({route}) => ({
                    headerStyle: {
                        backgroundColor:ColorConstants.background
                    },
                    tabBarStyle: {
                        backgroundColor: ColorConstants.background
                    },
                    headerTitle: () => {
                       return (
                           <Image
                               style={styles.image}
                               source={appLogo}
                               contentFit="fit"
                               transition={1000}
                           />
                       )
                    },
                    tabBarLabel: () => {
                        return <Text style={[styles.label, {color: ColorConstants.foreground}]}>
                            {route.name}
                        </Text>
                    },
                    tabBarIcon: ({focused}) => {
                        let icon;
                        switch (route.name) {
                            case Screens.Home:
                                icon = <HomeIcon focused={focused} width={SizeConstants.iconWidth}
                                                 height={SizeConstants.iconHeight}
                                                 text={Screens.Home}/>;
                                break;
                            case Screens.Search:
                                icon = <SearchIcon focused={focused} width={SizeConstants.iconWidth}
                                                   height={SizeConstants.iconHeight}
                                                   text={Screens.Search}/>;
                                break;
                            case Screens.Library:
                                icon = <LibraryIcon focused={focused} width={SizeConstants.iconWidth}
                                                    height={SizeConstants.iconHeight}
                                                    text={Screens.Library}/>;
                                break;
                            case Screens.Menu:
                                icon = <MenuIcon focused={focused} width={SizeConstants.iconWidth}
                                                 height={SizeConstants.iconHeight}
                                                 text={Screens.Menu}/>;
                                break;
                            default:
                                icon = <HomeIcon focused={focused} width={SizeConstants.iconWidth}
                                                 height={SizeConstants.iconHeight}
                                                 text={Screens.Home}/>;
                                break;
                        }
                        return (
                            icon
                        );
                    },
                })}
            >
                <Tab.Screen
                    name={Screens.Home}
                    component={HomeScreen}
                />
                <Tab.Screen name={Screens.Search} component={SearchScreen}/>
                <Tab.Screen name={Screens.Library} component={LibraryScreen}/>
                <Tab.Screen name={Screens.Menu} component={MenuScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorConstants.background,
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontSize: FontConstants.sizeRegular,
        fontFamily: FontConstants.familySemiBold
    },
    image: {
        width: 185,
        height: 36,
        paddingTop:SizeConstants.paddingRegular,
        paddingBottom:SizeConstants.paddingRegular
    }
});
