import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

type DrinkCategory = {
  id: string;
  name: string;
  description: string;
};

const drinkCategories: DrinkCategory[] = [
  { id: "1", name: "Espresso Classics", description: "Pure coffee hits" },
  {
    id: "2",
    name: "Cold Brews & Iced Coffees",
    description: "Cool and refreshing blends",
  },
  { id: "3", name: "Latte Love", description: "Creamy delights" },
  { id: "4", name: "Flavored Brews", description: "Infused with flavors" },
  { id: "5", name: "Teas & Infusions", description: "Soothing tea selections" },
  { id: "6", name: "Mocktails & Mixers", description: "Non-alcoholic blends" },
];

const Category: React.FC = () => {
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    router.push({
      pathname: "/User",
      params: { categoryId },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Drink Categories</Text>
      <FlatList
        data={drinkCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategorySelect(item.id)}
            style={styles.categoryItem}
          >
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text style={styles.categoryDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f3e5d3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6f4e37",
    marginBottom: 16,
    textAlign: "center",
  },
  categoryItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3e2723",
  },
  categoryDescription: {
    fontSize: 14,
    color: "#795548",
  },
});

export default Category;
