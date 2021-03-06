import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  loadingWrapper: {
    height: "100%",
    width: "100%",
    padding: "10%",
  },
  container: {
    alignItems: "center",
    paddingLeft: "8%",
    paddingRight: "8%",
  },
  header: {
    fontFamily: "ChairdrobeRoundedBold",
    fontSize: 42,
    color: "white",
  },
  title: {
    fontFamily: "NotoSansBold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  subTitle: {
    fontFamily: "NotoSansRegular",
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  messageWrapper: {
    backgroundColor: "#000000",
    padding: "8%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: "5%",
    width: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  messageTitle: {
    fontFamily: "ChairdrobeRoundedBold",
    fontSize: 26,
    color: "white",
    marginBottom: 20,
  },
  messageText: {
    fontFamily: "NotoSansRegular",
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  platformWrapper: {
    width: "100%",
    padding: "5%",
    backgroundColor: "#000000",
    borderRadius: 5,
    marginBottom: "10%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
  platformRow: {
    flexDirection: "row",
  },
  platformText: {
    fontFamily: "NotoSansBold",
    fontSize: 18,
    color: "white",
    marginLeft: 5,
  },
});

export default function Page() {
  const [statusData, setStatusData] = useState({})
  const [messages, setMessages] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(true)

  const refreshData = async () => {
    await loadStatus();
  };

  const loadStatus = async () => {
    setLoading(true)

    const response = {
      data: {
        success: true,
        message: "Sikeresen lek??rdezve.",
        status: {
          GTAO: {
            PC: "El??rhet?? / UP",
            PS4: "El??rhet?? / UP",
            X1: "El??rhet?? / UP",
            XCG: "El??rhet?? / UP",
          },
          RDO: {
            PC: "El??rhet?? / UP",
            PS4: "El??rhet?? / UP",
            X1: "El??rhet?? / UP",
            Stadia: "El??rhet?? / UP",
            XCG: "El??rhet?? / UP",
          },
          RGL: {
            Authentication: "El??rhet?? / UP",
            Store: "El??rhet?? / UP",
            CS: "El??rhet?? / UP",
            Downloads: "El??rhet?? / UP",
          },
          SC: {
            AS: "El??rhet?? / UP",
          },
        },
      },
    };

    if (response.data.success) {
      setStatusData(response.data.status)
    } else {
      alert("Hiba t??rt??nt: " + response.data.message);
    }

    const response2 = {
      data: {
        success: true,
        message: "Az ??zenetek sikeresen lek??rdezve.",
        messages: ["Jelenleg karbantart??sokat v??gz??nk oldalunkon."],
      },
    };

    if (response2.data.success) {
      setMessages(response2.data.messages)
    } else {
      alert("Hiba t??rt??nt: " + response2.data.message);
    }

    setLoading(false)
  };

  const onRefresh = async () => {
    setRefreshing(true)
    await refreshData();
    setRefreshing(false)
  };

  const getHeaderStatus = () => {
    let statusHeader = "";

    for (const [statusCategory, statusCategoryValue] of Object.entries(
      statusData
    )) {
      for (const [statusPlatform, statusPlatformValue] of Object.entries(
        statusCategoryValue
      )) {
        if (statusPlatformValue === "Korl??tozott / Limited") {
          statusHeader =
            "N??h??ny szolg??ltat??s ??llapota jelenleg: Korl??tozott / Limited";
          break;
        } else if (statusPlatformValue === "Nem el??rhet?? / Down") {
          statusHeader =
            "N??h??ny szolg??ltat??s ??llapota jelenleg: Nem el??rhet?? / Down";
          break;
        } else if (
          statusCategory === "SC" &&
          statusPlatform === "AS" &&
          statusPlatformValue === "El??rhet?? / UP"
        ) {
          statusHeader = "Jelenleg minden szolg??ltat??s ??llapota: El??rhet?? / UP";
        }
      }
    }

    return statusHeader;
  };

  useEffect(() => {
    refreshData()
  }, [])

  const messageBoxes = messages.map((message, index) => {
    return (
      <View style={styles.messageWrapper} key={index}>
        <Text style={styles.messageTitle}>K??zlem??ny</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );
  });

  let statusHeader = getHeaderStatus();

  let statusHeaderColor = "";

  if (
    statusHeader ==
    "N??h??ny szolg??ltat??s ??llapota jelenleg: Korl??tozott / Limited"
  )
    statusHeaderColor = "#FFA500";
  if (
    statusHeader ==
    "N??h??ny szolg??ltat??s ??llapota jelenleg: Nem el??rhet?? / Down"
  )
    statusHeaderColor = "#FF0000";
  if (statusHeader == "Jelenleg minden szolg??ltat??s ??llapota: El??rhet?? / UP")
    statusHeaderColor = "#00FF00";

  let date = new Date();
  let dateString =
    date.getFullYear() +
    ". " +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ". " +
    ("0" + date.getDate()).slice(-2) +
    ". " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);


  return (
    <ScrollView
        refreshing={refreshing}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color="#ffa500" />
          </View>
        ) : (
          <View style={{ backgroundColor: "#121212" }}>
            <View style={styles.container}>
              <Text style={[styles.header, { marginTop: "10%" }]}>
                Rockstar Games
              </Text>
              <Text style={[styles.header, { marginBottom: "13%" }]}>
                Service Status
              </Text>

              <Icon name="wifi" size={40} color={statusHeaderColor} />

              <Text
                style={[
                  styles.title,
                  {
                    marginTop: "5%",
                    color: statusHeaderColor,
                  },
                ]}
              >
                {statusHeader}
              </Text>
              <Text
                style={[
                  styles.subTitle,
                  { marginTop: "2%", marginBottom: "20%" },
                ]}
              >
                Utolj??ra friss??tve: {dateString}
              </Text>

              {messages.length > 0 && (
                <View style={{ width: "100%", marginBottom: "20%" }}>
                  {messageBoxes}
                </View>
              )}
            </View>
            <View style={styles.container}>
              {statusData.GTAO && (
                <View style={[styles.platformWrapper]}>
                  <Text
                    style={[styles.header, { fontSize: 30, marginBottom: 20 }]}
                  >
                    GTA Online
                  </Text>

                  <PlatformInfoBox platform="PC" status={statusData.GTAO.PC} />
                  <PlatformInfoBox
                    platform="PS4"
                    status={statusData.GTAO.PS4}
                  />
                  <PlatformInfoBox
                    platform="Xbox One"
                    status={statusData.GTAO.X1}
                  />
                  <PlatformInfoBox
                    platform="Xbox Cloud Gaming"
                    status={statusData.GTAO.XCG}
                  />
                </View>
              )}
              {statusData.RDO && (
                <View style={styles.platformWrapper}>
                  <Text
                    style={[styles.header, { fontSize: 30, marginBottom: 20 }]}
                  >
                    Red Dead Online
                  </Text>

                  <PlatformInfoBox platform="PC" status={statusData.RDO.PC} />
                  <PlatformInfoBox platform="PS4" status={statusData.RDO.PS4} />
                  <PlatformInfoBox
                    platform="Xbox One"
                    status={statusData.RDO.X1}
                  />
                  <PlatformInfoBox
                    platform="Stadia"
                    status={statusData.RDO.Stadia}
                  />
                  <PlatformInfoBox
                    platform="Xbox Cloud Gaming"
                    status={statusData.RDO.XCG}
                  />
                </View>
              )}
              {statusData.RGL && (
                <View style={styles.platformWrapper}>
                  <Text
                    style={[styles.header, { fontSize: 30, marginBottom: 20 }]}
                  >
                    Rockstar Games Launcher
                  </Text>

                  <PlatformInfoBox
                    platform="Hiteles??t??s / Authentication"
                    status={statusData.RGL.Authentication}
                  />
                  <PlatformInfoBox
                    platform="Bolt / Store"
                    status={statusData.RGL.Store}
                  />
                  <PlatformInfoBox
                    platform="Felh?? szolg??ltat??sok / Cloud Services"
                    status={statusData.RGL.CS}
                  />
                  <PlatformInfoBox
                    platform="Let??lt??sek / Downloads"
                    status={statusData.RGL.Downloads}
                  />
                </View>
              )}
              {statusData.SC && (
                <View style={[styles.platformWrapper, { marginBottom: "15%" }]}>
                  <Text
                    style={[
                      styles.header,
                      { fontSize: 30, marginBottom: "10%" },
                    ]}
                  >
                    Social Club
                  </Text>

                  <PlatformInfoBox
                    platform="Minden szolg??ltat??s"
                    status={statusData.SC.AS}
                  />
                </View>
              )}
            </View>

            <View style={[styles.container, { alignItems: "baseline" }]}>
              <Text
                style={[styles.header, { fontSize: 30, marginBottom: "5%" }]}
              >
                Mit jelent?
              </Text>
              <View style={{ marginBottom: "5%" }}>
                <View style={styles.platformRow}>
                  <Icon
                    style={{ margin: 5 }}
                    name="circle"
                    size={15}
                    color="#00FF0F"
                  />
                  <Text style={[styles.platformText, { color: "#00FF0F" }]}>
                    El??rhet?? / UP
                  </Text>
                </View>
                <Text
                  style={[
                    styles.platformText,
                    {
                      color: "white",
                      marginLeft: 28,
                      fontFamily: "NotoSansRegular",
                      fontSize: 14,
                    },
                  ]}
                >
                  Ebben az esetben a j??t??kok, szolg??ltat??sok probl??ma n??lk??l
                  m??k??dnek.
                </Text>
              </View>
              <View style={{ marginBottom: "5%" }}>
                <View style={styles.platformRow}>
                  <Icon
                    style={{ margin: 5 }}
                    name="circle"
                    size={15}
                    color="#FFA500"
                  />
                  <Text style={[styles.platformText, { color: "#FFA500" }]}>
                    Korl??tozott / Limited
                  </Text>
                </View>
                <Text
                  style={[
                    styles.platformText,
                    {
                      color: "white",
                      marginLeft: 28,
                      fontFamily: "NotoSansRegular",
                      fontSize: 14,
                    },
                  ]}
                >
                  Ebben az esetben az adott j??t??k / szolg??ltat??s korl??tozottan
                  el??rhet??. Elk??pzelhet??, hogy lehet csatlakozni az adott
                  j??t??khoz, de s??lyos hib??k l??phetnek fel. Az is el??fordulhat,
                  hogy nem ker??l ment??sre az el??rehalad??s vagy elvesznek a
                  kor??bbi javak, t??rgyak ??s egy??b tartalmak (szintek, p??nz,
                  j??rm??vek, ingatlanok). Az elt??nt tartalmak vissza??ll??t??sa nem
                  minden esetben lehets??ges, ez??rt nem aj??nlott ilyen esetben
                  elind??tani a j??t??kokat, szolg??ltat??sokat.
                </Text>
              </View>
              <View style={{ marginBottom: "15%" }}>
                <View style={styles.platformRow}>
                  <Icon
                    style={{ margin: 5 }}
                    name="circle"
                    size={15}
                    color="#FF0000"
                  />
                  <Text style={[styles.platformText, { color: "#FF0000" }]}>
                    Nem el??rhet?? / Down
                  </Text>
                </View>
                <Text
                  style={[
                    styles.platformText,
                    {
                      color: "white",
                      marginLeft: 28,
                      fontFamily: "NotoSansRegular",
                      fontSize: 14,
                    },
                  ]}
                >
                  Ebben az esetben az adott j??t??k / szolg??ltat??s egy??ltal??n nem
                  el??rhet??, csatlakoz??sra ??s/vagy v??s??rl??sra nincs lehet??s??g.
                </Text>
              </View>
              <View
                style={{
                  marginBottom: "10%",
                  borderTopColor: "white",
                  borderTopWidth: 2,
                  paddingTop: "15%",
                }}
              >
                <Text
                  style={[
                    styles.platformText,
                    {
                      color: "grey",
                      marginLeft: 28,
                      fontFamily: "NotoSansRegular",
                      fontSize: 14,
                      textAlign: "center",
                    },
                  ]}
                >
                  Az oldalon automatikusan friss??lnek az adatok a Rockstar Games
                  szervereinek ??llapota alapj??n, tov??bb?? ugyanazt tartalmazz??k,
                  mint a Rockstar Games Service Status oldal. Az oldalt
                  automatikus robot ??zemelteti.
                </Text>
              </View>
              <View style={{ marginBottom: "10%" }}>
                <Text
                  style={[
                    styles.platformText,
                    {
                      color: "grey",
                      marginLeft: 28,
                      fontFamily: "NotoSansRegular",
                      fontSize: 14,
                      textAlign: "center",
                    },
                  ]}
                >
                  Ezt az oldalt nem a Rockstar Games vagy a Take-Two Interactive
                  ??zemelteti. A huroc.com oldal nem hivatalos csatorna, a
                  Hungarian Rockstar Fan Club pedig nem ??ll kapcsolatban sem a
                  Rockstar Games, sem a Take-Two Interactive v??llalatokkal.
                </Text>
              </View>
              <View style={{ marginBottom: "15%" }}>
                <Text
                  style={[
                    styles.platformText,
                    {
                      color: "grey",
                      marginLeft: 28,
                      fontFamily: "NotoSansRegular",
                      fontSize: 14,
                      textAlign: "center",
                    },
                  ]}
                >
                  This page in unofficial and is not produced or maintained by
                  Rockstar Games, Inc. or Take-Two Interactive Software, Inc.
                  Please note that we are not affiliated with Rockstar Games and
                  our company is fan-created.
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
  );
}

function PlatformInfoBox(props) {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.platformRow}>
        <Icon
          style={{ margin: 5 }}
          name="circle"
          size={15}
          color={statusToColor(props.status)}
        />
        <Text
          style={[styles.platformText, { color: statusToColor(props.status) }]}
        >
          {props.platform}
        </Text>
      </View>
      <Text style={[styles.platformText, { color: "white", marginLeft: 28 }]}>
        {props.status}
      </Text>
    </View>
  );
}

function statusToColor(status) {
  if (status == "El??rhet?? / UP") {
    return "#00FF00";
  } else if (status == "Korl??tozott / Limited") {
    return "#FFA500";
  } else {
    return "#FF0000";
  }
}