import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Checkbox from "../../components/Checkbox/Checkbox";

import Welcome6Image from "../../images/welcome6.png";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  textContainer: {
    width: "100%",
    height: "65%",
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
    height: "35%",
  },
});

export default function Page({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <ProgressBar progress={(100 / 7) * 6} />

      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Fontos dokumentumok</Text>
          <Text style={styles.description}>
            Az alkalmazás használatához el kell fogadnod a HRC News Használati
            Feltételeit, Szolgáltatási Feltételeinket és az Adatkezelési
            Tájékoztatónkban foglaltakat.
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

          <View style={{ marginBottom: 50 }} />

          <Button
            text="Tovább"
            width={100}
            height={40}
            onPress={() => navigation.navigate("WelcomeStep7")}
          />
        </View>

        <Image style={styles.image} source={Welcome6Image} />
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
