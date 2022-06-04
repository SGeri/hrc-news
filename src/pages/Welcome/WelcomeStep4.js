import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Checkbox from "../../components/Checkbox/Checkbox";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  textContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    textAlign: "center",
    fontFamily: "ChairdrobeRoundedBold",
    fontSize: 32,
    color: "white",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    fontFamily: "NotoSansRegular",
    fontSize: 16,
    color: "white",
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: "50%",
  },
});

export default function Page({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <ProgressBar progress={(100 / 7) * 4} />

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Értesítések</Text>
        <Text style={styles.description}>
          Lássuk, hogy milyen típusú értesítéseket szeretnél kapni! Később
          bármikor módosíthatod ezeket a beállításokat!
        </Text>

        <Checkbox
          text="Service Status értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="GTA Online értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="Red Dead Online értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="Grand Theft Auto VI értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="GTA: The Triology értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="Rockstar Games értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="Take-Two Interactive értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <Checkbox
          text="Hungarian Rockstar Club értesítések"
          checked={true}
          onPress={() => {}}
        />

        <Separator />

        <View style={{ marginBottom: 50 }} />

        <Button
          text="Tovább"
          width={100}
          height={40}
          onPress={() => navigation.navigate("WelcomeStep5")}
        />
      </SafeAreaView>
    </>
  );
}

function Separator() {
  return (
    <View
      style={{
        width: "100%",
        height: 1,
        backgroundColor: "white",
      }}
    />
  );
}
