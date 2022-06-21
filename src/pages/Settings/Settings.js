import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

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
    marginBottom: 20,
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

  socialWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: "5%",
  },
  socialIconWrapper: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  socialText: {
    fontFamily: "NotoSansBold",
    fontSize: 14,
    color: "white",
    marginLeft: 15,
  },

  copyrightWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  copyrightBox: {
    width: "100%",
    height: 70,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightText: {
    fontFamily: "NotoSansBold",
    fontSize: 12,
    color: "white",
  },
});

export default function Page({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beállítások</Text>

      <Category
        icon="bell-o"
        text="Értesítések"
        onPress={() => navigation.navigate("SettingsNotifications")}
      />

      <Separator />

      <Category
        icon="eye"
        text="Megjelenés"
        info="Új funkció"
        onPress={() => navigation.navigate("SettingsAppearance")}
      />

      <Separator />

      <Category
        icon="shield"
        text="Adatvédelem és biztonság"
        onPress={() => navigation.navigate("SettingsPrivacy")}
      />

      <Separator />

      <Category
        icon="headphones"
        text="Támogatás"
        onPress={() => navigation.navigate("SettingsSupport")}
      />

      <Separator />

      <Category
        icon="info"
        text="Az alkalmazásról"
        onPress={() => navigation.navigate("SettingsAbout")}
      />

      <Separator />

      <SocialIcon icon="facebook" text="Facebook" style={{ marginTop: 30 }} />
      <SocialIcon icon="instagram" text="Instagram" />
      <SocialIcon icon="twitter" text="Twitter" />
      <SocialIcon icon="youtube" text="YouTube" />
      <SocialIcon icon="globe" text="Weboldal" />

      <View style={styles.copyrightWrapper}>
        <View style={styles.copyrightBox}>
          <Text style={styles.copyrightText}>
            Copyright 2022 | Hungarian Rockstar Club EV.
          </Text>
          <Text style={styles.copyrightText}>Minden jog fenntartva.</Text>
        </View>
      </View>
    </View>
  );
}

function SocialIcon(props) {
  return (
    <View style={[styles.socialWrapper, props.style]}>
      <View style={styles.socialIconWrapper}>
        <Icon name={props.icon} size={20} color="white" />
      </View>
      <Text style={styles.socialText}>{props.text}</Text>
    </View>
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
