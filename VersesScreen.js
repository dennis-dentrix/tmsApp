import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import versesData from "./assets/verses.json"; // Ensure the path is correct

const { width, height } = Dimensions.get("window");

const VersesScreen = ({ route, navigation }) => {
  const { categoryId } = route.params; // Get the categoryId from the navigation params
  const [verses, setVerses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current verse index

  useEffect(() => {
    // Load the verses for the selected category
    const selectedCategory = versesData[categoryId];
    if (selectedCategory) {
      setVerses(selectedCategory.verses);
    }
  }, [categoryId]);

  // Set header title based on current verse index
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${categoryId}${currentIndex + 1}`, // Dynamically set header title to "A1", "A2", etc.
    });
  }, [currentIndex]);

  // Handle FlatList scroll event to determine the current index
  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderVerse = ({ item }) => (
    <View style={styles.verseContainer}>
      <View style={styles.content}>
        <Text style={styles.verseTitle}>{item.verseTitle}</Text>
        <View style={styles.divider} />
        <Text style={styles.verseBody}>{item.text}</Text>
        <Text style={styles.verseReference}>{item.verse}</Text>
      </View>

      {/* Swipe hint */}
      <Text style={styles.swipeHint}>{"<< swipe >>"}</Text>
    </View>
  );

  return (
    <FlatList
      data={verses}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderVerse}
      contentContainerStyle={styles.flatListContainer}
      onScroll={handleScroll} // Track scroll to update index
      scrollEventThrottle={16} // Throttle scroll events for performance
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  verseContainer: {
    width: width, // Each verse takes up full screen width
    height: height - 100, // Adjust for header/footer spacing
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    // backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verseTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00C853", // Example dark red
    marginBottom: 10,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
  verseBody: {
    fontSize: 18,
    // textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  verseReference: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  swipeHint: {
    fontSize: 14,
    color: "#888",
    marginTop: 20,
  },
});

export default VersesScreen;
