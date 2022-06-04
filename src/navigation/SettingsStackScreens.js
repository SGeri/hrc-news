import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Settings from "../pages/Settings/Settings";
import SettingsNotifications from "../pages/Settings/SettingsNotifications";
import SettingsAppearance from "../pages/Settings/SettingsAppearance";
import SettingsPrivacy from "../pages/Settings/SettingsPrivacy";
import SettingsSupport from "../pages/Settings/SettingsSupport";
import SettingsAbout from "../pages/Settings/SettingsAbout";

const SettingsStack = createNativeStackNavigator();

export default function WelcomeStackScreens() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen
        name="SettingsNotifications"
        component={SettingsNotifications}
      />
      <SettingsStack.Screen
        name="SettingsAppearance"
        component={SettingsAppearance}
      />
      <SettingsStack.Screen
        name="SettingsPrivacy"
        component={SettingsPrivacy}
      />
      <SettingsStack.Screen
        name="SettingsSupport"
        component={SettingsSupport}
      />
      <SettingsStack.Screen name="SettingsAbout" component={SettingsAbout} />
    </SettingsStack.Navigator>
  );
}
