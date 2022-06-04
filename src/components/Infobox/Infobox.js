import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "#ffa500",
    borderRadius: 5,
    backgroundColor: "#000000",

    justifyContent: "center",
    alignItems: "center",

    padding: 5,
  },
  text: {
    color: "white",
    fontFamily: "NotoSansBold",
    textAlign: "center",
    fontSize: 12,
  },
});

export default function Infobox(props) {
  return (
    <View
      style={[
        styles.button,
        { width: props.width, height: props.height },
        props.style,
      ]}
    >
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
