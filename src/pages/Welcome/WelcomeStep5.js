import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Welcome5Image from "../../images/welcome5.png";

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
      <ProgressBar progress={(100 / 7) * 5} />

      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Service Status</Text>
          <Text style={styles.description}>
            Ha szeretnéd tudni a GTA Online, Red Dead Online, Rockstar Games
            Launcher vagy Social Club szervereinek állapotát, csak keresd a Wifi
            ikont az alkalmazásban.
          </Text>

          <Button
            text="Tovább"
            width={100}
            height={40}
            onPress={() => navigation.navigate("WelcomeStep6")}
          />
        </View>

        <Image style={styles.image} source={Welcome5Image} />
      </SafeAreaView>
    </>
  );
}
