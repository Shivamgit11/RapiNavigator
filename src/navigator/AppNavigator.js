import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import TabBarIcon from "../components/TabBarIcon";
import TabBarText from "../components/TabBarText";
import { useTheme, themeColor } from "react-native-rapi-ui";

const Navigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "white",
          backgroundColor: isDarkmode ? themeColor.dark100 : "white",
        },
      }}
      style={{marginBottom: 10}}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title={"Home"} />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon="home" color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title={"Profile"} />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon="person" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: ({ focused }) => <TabBarText title={"About"} />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon="information-circle" color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator.Navigator screenOptions={{ headerShown: false }}>
        <Navigator.Screen name="MainTabs" component={MainTabs} />
        <Navigator.Screen name="SecondScreen" component={SecondScreen} />
        {/* <Navigator.Screen name="Profile" component={ProfileScreen} />
                <Navigator.Screen name="About" component={AboutScreen} /> */}
      </Navigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
