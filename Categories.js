import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const data = [
  { id: "A", image: require("./assets/new.jpg"), title: "Live the new Life" },
  {
    id: "B",
    image: require("./assets/proclaim.jpg"),
    title: "Proclaim Christ",
  },
  {
    id: "C",
    image: require("./assets/resource.jpg"),
    title: "Relay on God's resources",
  },
  {
    id: "D",
    image: require("./assets/disciple.jpg"),
    title: "Be Christ's Disciple",
  },
  {
    id: "E",
    image: require("./assets/grow.jpg"),
    title: "Grow in ChristLikeness",
  },
];

const Categories = ({ navigation, route }) => {
  return (
    <View style={styles.categories}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VersesContainer item={item} navigation={navigation} />
        )} // Passing navigation
        numColumns={2}
        contentContainerStyle={styles.iconsContainer}
      />
    </View>
  );
};

export default Categories;

function VersesContainer({ navigation, item }) {
  return (
    <TouchableOpacity
      style={styles.iconButton}
      onPress={() => navigation.navigate("Ver", { categoryId: item.id })} // Pass the category ID
    >
      <Image source={item.image} style={styles.iconImage} />
      <Text style={styles.iconText}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categories: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  iconsContainer: {
    justifyContent: "space-between",
  },
  iconButton: {
    flex: 1,
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  iconImage: {
    borderRadius: 10,
    width: 110,
    height: 100,
  },
  iconText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    textAlign: "center",
  },
});
