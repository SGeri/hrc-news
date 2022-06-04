import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 5,
    backgroundColor: "black",
  },
  progress: {
    height: "100%",
    backgroundColor: "#ffa500",
  },
});

export default function ProgressBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.progress, { width: `${props.progress}%` }]} />
    </View>
  );
}
