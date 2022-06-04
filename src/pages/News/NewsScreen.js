import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import IconFontisto from "react-native-vector-icons/Fontisto";

const styles = StyleSheet.create({
  loadingWrapper: {
    height: "100%",
    width: "100%",
    padding: "10%",
  },
  container: {
    padding: "8%",
  },
  cardWrapper: {
    height: 320,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#000000",
    marginBottom: "10%",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  cardImage: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardTextWrapper: {
    height: "40%",
    padding: "5%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardTimestampWrapper: {
    flexDirection: "row",
  },
  cardTimestamp: {
    fontFamily: "NotoSansRegular",
    fontSize: 12,
  },
  cardTitle: {
    color: "white",
    fontFamily: "NotoSansBold",
    fontSize: 18,
  },
  pinnedPostWrapper: {
    width: "100%",
    height: 400,
    backgroundColor: "#000000",
    borderBottomColor: "rgba(255,255,255,0.5)",
    borderBottomWidth: 1,
  },
  pinnedImage: {
    width: "100%",
    height: "60%",
  },
  loadMoreButton: {
    height: 40,
    width: 180,

    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: "#000000",

    padding: 5,
  },
  loadMoreButtonText: {
    color: "white",
    fontFamily: "ChairdrobeRoundedBold",
    textAlign: "center",
    fontSize: 22,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Page() {
  return (
    <ScrollView
      style={{ backgroundColor: "#121212" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
      }
    >
      {loading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#ffa500" />
        </View>
      ) : (
        <View style={{ backgroundColor: "#121212" }}>
          {pinnedPost && (
            <TouchableOpacity
              style={[styles.pinnedPostWrapper, { marginBottom: "5%" }]}
              activeOpacity={0.8}
              onPress={() => {
                Linking.openURL(pinnedPost.link);
              }}
            >
              <Image
                style={styles.pinnedImage}
                source={{ uri: pinnedPost.thumbURL }}
              />
              <View style={[styles.cardTextWrapper, { padding: "8%" }]}>
                <View style={styles.cardTimestampWrapper}>
                  <Text style={[styles.cardTimestamp, { color: "white" }]}>
                    {pinnedPost.category} |{" "}
                  </Text>
                  <Text style={[styles.cardTimestamp, { color: "grey" }]}>
                    {this.formatTimestamp(pinnedPost.releaseDate)}
                  </Text>
                </View>
                <Text style={[styles.cardTitle, { fontSize: 20 }]}>
                  {pinnedPost.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          <View style={styles.container}>
            {posts}
            {lastPostLoadedIndex != fullPostData.length - 1 && (
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={[styles.loadMoreButton]}
                  onPress={this.loadMore}
                  activeOpacity={0.8}
                >
                  <Text style={styles.loadMoreButtonText}>Több betöltése</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
