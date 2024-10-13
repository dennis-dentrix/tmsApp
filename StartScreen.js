import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Topical Memory Scripture</Text>
      <Image source={require("./assets/logo.webp")} />
      <Text style={styles.subtitle}>NIV</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Verses")}
        >
          <Text style={styles.buttonText}>Tap to continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "80%",
  },
  nextButton: {
    backgroundColor: "#00C853",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default StartScreen;
