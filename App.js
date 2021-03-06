import { useState } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";

import Icon from "react-native-vector-icons/FontAwesome";

import WelcomeStackScreens from "./src/navigation/WelcomeStackScreens";
import GuideStackScreens from "./src/navigation/GuideStackScreens";
import SettingsStackScreens from "./src/navigation/SettingsStackScreens";
import NewsScreen from "./src/pages/News/NewsScreen";
import StatusScreen from "./src/pages/Status/StatusScreen";

import HeaderTitle from "./src/components/Header/HeaderTitle";
import HeaderRight from "./src/components/Header/HeaderRight";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

export default function App() {
  const [fontsLoaded] = useFonts({
    ChairdrobeRoundedBold: require("./src/fonts/ChairdrobeRoundedBold.otf"),
    BebasNeueRegular: require("./src/fonts/BebasNeueRegular.ttf"),
    NotoSansRegular: require("./src/fonts/NotoSansRegular.ttf"),
    NotoSansBold: require("./src/fonts/NotoSansBold.ttf"),
  });
  const [firstLaunch, setFirstLaunch] = useState(true);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  try {
    const launchStorageValue = AsyncStorage.getItem("@first_launch");

    if (launchStorageValue === "false") {
      setFirstLaunch(false);
    }
  } catch (e) {
    setFirstLaunch(false);
  }

  // Comment out WelcomeStack to disable welcome screen
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstLaunch && (
          <Stack.Screen name="Welcome" component={WelcomeStackScreens} />
        )}
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "left",
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight />,

        tabBarShowLabel: false,
        gestureEnabled: false,
        tabBarActiveTintColor: "#ffa500",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="H??rek"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="globe" size={25} color={focused ? "#ffa500" : "#000"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Status"
        component={StatusScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="wifi" size={25} color={focused ? "#ffa500" : "#000"} />
          ),
        }}
      />
      <Tabs.Screen
        name="??tmutat??"
        component={GuideStackScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="file-text-o"
              size={25}
              color={focused ? "#ffa500" : "#000"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Be??ll??t??sok"
        component={SettingsStackScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="sliders"
              size={25}
              color={focused ? "#ffa500" : "#000"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
