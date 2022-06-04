import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Guide from "../pages/Guide/Guide";
import GuideNews from "../pages/Guide/GuideNews";
import GuideStatus from "../pages/Guide/GuideStatus";
import GuideGuide from "../pages/Guide/GuideGuide";
import GuideSettings from "../pages/Guide/GuideSettings";

const GuideStack = createNativeStackNavigator();

export default function GuideStackScreens() {
  return (
    <GuideStack.Navigator screenOptions={{ headerShown: false }}>
      <GuideStack.Screen name="Guide" component={Guide} />
      <GuideStack.Screen name="GuideNews" component={GuideNews} />
      <GuideStack.Screen name="GuideStatus" component={GuideStatus} />
      <GuideStack.Screen name="GuideGuide" component={GuideGuide} />
      <GuideStack.Screen name="GuideSettings" component={GuideSettings} />
    </GuideStack.Navigator>
  );
}
