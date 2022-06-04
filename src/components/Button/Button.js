import { StyleSheet, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: "#000000",

    justifyContent: "center",
    alignItems: "center",

    padding: 5,
  },
  text: {
    color: "white",
    fontFamily: "ChairdrobeRoundedBold",
    textAlign: "center",
    fontSize: 22,
  },
});

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: props.width, height: props.height },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
