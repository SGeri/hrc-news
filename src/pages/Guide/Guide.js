import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import Infobox from "../../components/Infobox/Infobox";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 30,
  },
  title: {
    textAlign: "left",
    fontFamily: "ChairdrobeRoundedBold",
    fontSize: 32,
    color: "white",
    marginBottom: 10,
  },
  description: {
    textAlign: "left",
    fontFamily: "NotoSansRegular",
    fontSize: 16,
    color: "white",
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: "50%",
  },

  categoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: 5,
  },
  categoryIconWrapper: {
    width: "18%",
    height: "100%",
    alignItems: "center",
  },
  categoryIcon: {
    margin: 10,
  },
  categoryText: {
    fontFamily: "NotoSansBold",
    fontSize: 16,
    color: "white",
  },
  categoryArrow: {
    position: "absolute",
    right: "5%",
  },
});

export default function Page({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Útmutató</Text>
      <Text style={styles.description}>
        Ha szeretnél többet megtudni az alkalmazásról és a HRC News
        szolgáltatásairól, akkor jó helyen jársz. Böngéssz az alábbi menüpontok
        között!
      </Text>

      <Category
        icon="globe"
        text="Hírfolyam"
        onPress={() => navigation.navigate("GuideNews")}
      />

      <Separator />

      <Category
        icon="wifi"
        text="Service Status"
        info="Új funkció"
        onPress={() => navigation.navigate("GuideStatus")}
      />

      <Separator />

      <Category
        icon="file-text-o"
        text="Útmutató"
        onPress={() => navigation.navigate("GuideGuide")}
      />

      <Separator />

      <Category
        icon="sliders"
        text="Beállítások"
        onPress={() => navigation.navigate("GuideSettings")}
      />

      <Separator />
    </SafeAreaView>
  );
}

function Category(props) {
  return (
    <>
      <TouchableOpacity style={styles.categoryWrapper} onPress={props.onPress}>
        <View style={styles.categoryIconWrapper}>
          <Icon
            style={styles.categoryIcon}
            name={props.icon}
            size={30}
            color="white"
          />
        </View>

        <Text style={styles.categoryText}>{props.text}</Text>

        {props.info && <Infobox style={{ marginLeft: 15 }} text={props.info} />}

        <Icon
          style={styles.categoryArrow}
          name="chevron-right"
          size={15}
          color="white"
        />
      </TouchableOpacity>
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
