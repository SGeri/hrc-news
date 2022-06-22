import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../../components/Button/Button";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import Welcome7Image from "../../images/welcome7.png";

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
  const exitWelcome = async () => {
    try {
      await AsyncStorage.setItem("@first_launch", "false");
    } catch (e) {
      alert("Nem sikerült elmenteni az adatokat a háttértárba!");
    }

    navigation.replace("Tabs", { screen: "News" });
  };

  return (
    <>
      <ProgressBar progress={100} />

      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Készen is vagyunk!</Text>
          <Text style={styles.description}>
            Elkészültél! Mostantól te is használhatod a HRC News alkalmazást.
          </Text>

          <Button
            text="Indítás"
            width={100}
            height={40}
            onPress={exitWelcome}
          />
        </View>

        <Image style={styles.image} source={Welcome7Image} />
      </SafeAreaView>
    </>
  );
}
