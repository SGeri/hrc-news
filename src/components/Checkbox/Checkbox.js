import { StyleSheet, View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontFamily: "NotoSansBold",
    fontSize: 14,
    color: "white",
  },
});

export default function Checkbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <CheckBox checkedColor="#ffa500" {...props} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
