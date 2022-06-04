import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Welcome2Image from "../../images/welcome2.png";

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
    marginBottom: 50,
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
      <ProgressBar progress={(100 / 7) * 2} />

      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Alapok</Text>
          <Text style={styles.description}>
            A HRC News segítségével elsőként értesülhetsz minden GTA, RDR és
            Rockstar Games hírről, és gyorsan ellenőrizheted a szerverek
            állapotát is.
          </Text>

          <Button
            text="Tovább"
            width={100}
            height={40}
            onPress={() => navigation.navigate("WelcomeStep3")}
          />
        </View>

        <Image style={styles.image} source={Welcome2Image} />
      </SafeAreaView>
    </>
  );
}
