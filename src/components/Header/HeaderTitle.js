import { TouchableOpacity, Image, View, Text, Linking } from "react-native";

import HurocLogo from "../../images/huroc_logo_v1.png";

export default function HeaderTitle() {
  return (
    <TouchableOpacity
      style={{ display: "flex", flexDirection: "row" }}
      activeOpacity={0.8}
      onPress={() => {
        Linking.openURL("https://huroc.com/hrc-news");
      }}
    >
      <Image
        source={HurocLogo}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      <View style={{ display: "flex", justifyContent: "center" }}>
        <Text style={{ fontFamily: "ChairdrobeRoundedBold", fontSize: 20 }}>
          HRC News
        </Text>
      </View>
    </TouchableOpacity>
  );
}
