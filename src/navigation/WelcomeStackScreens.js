import { StatusBar } from "expo-status-bar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeStep1 from "../pages/Welcome/WelcomeStep1";
import WelcomeStep2 from "../pages/Welcome/WelcomeStep2";
import WelcomeStep3 from "../pages/Welcome/WelcomeStep3";
import WelcomeStep4 from "../pages/Welcome/WelcomeStep4";
import WelcomeStep5 from "../pages/Welcome/WelcomeStep5";
import WelcomeStep6 from "../pages/Welcome/WelcomeStep6";
import WelcomeStep7 from "../pages/Welcome/WelcomeStep7";

const WelcomeStack = createNativeStackNavigator();

export default function WelcomeStackScreens() {
  return (
    <>
      <StatusBar hidden />

      <WelcomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <WelcomeStack.Screen name="WelcomeStep1" component={WelcomeStep1} />
        <WelcomeStack.Screen name="WelcomeStep2" component={WelcomeStep2} />
        <WelcomeStack.Screen name="WelcomeStep3" component={WelcomeStep3} />
        <WelcomeStack.Screen name="WelcomeStep4" component={WelcomeStep4} />
        <WelcomeStack.Screen name="WelcomeStep5" component={WelcomeStep5} />
        <WelcomeStack.Screen name="WelcomeStep6" component={WelcomeStep6} />
        <WelcomeStack.Screen name="WelcomeStep7" component={WelcomeStep7} />
      </WelcomeStack.Navigator>
    </>
  );
}
