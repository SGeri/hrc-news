import { useState, useEffect } from "react";
import { View, Linking } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import IconFontisto from "react-native-vector-icons/Fontisto";

export default function HeaderRight() {
  const [statusColor, setStatusColor] = useState("green");

  /*useEffect(() => {
    const refreshStatus = async () => {
      // use api to get status
    };

    refreshStatus();

    setInterval(refreshStatus, 5000);
  }, []);*/

  return (
    <View style={{ display: "flex", flexDirection: "row", marginRight: 15 }}>
      <IconFontisto
        name="messenger"
        size={25}
        color="#000"
        style={{
          marginRight: 10,
        }}
        onPress={() => {
          Linking.openURL("https://m.me/hungarianrockstarclub");
        }}
      />

      <Icon
        name="wifi"
        size={25}
        color={statusColor}
        onPress={() => {
          Linking.openURL("https://huroc.com/status");
        }}
      />
    </View>
  );
}
