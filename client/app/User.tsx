import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import expresso from "./assets/expresso.png";
import americano from "./assets/americano.png";
import matcha from "./assets/matcha.png";
import ice_latte from "./assets/ice_latte.png";
import ice_coffee from "./assets/ice_coffee.png";
import vanilla from "./assets/vanilla.png";

type Drink = {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  image: any;
};

const drinks: Drink[] = [
  {
    id: "1",
    name: "Classic Espresso",
    price: 3.5,
    categoryId: "1",
    image: expresso,
  },
  { id: "2", name: "Americano", price: 3.0, categoryId: "1", image: americano },
  {
    id: "3",
    name: "Iced Latte",
    price: 4.5,
    categoryId: "2",
    image: ice_latte,
  },
  {
    id: "4",
    name: "Cold Brew",
    price: 4.0,
    categoryId: "2",
    image: ice_coffee,
  },
  {
    id: "5",
    name: "Vanilla Latte",
    price: 4.5,
    categoryId: "3",
    image: vanilla,
  },
  { id: "6", name: "Matcha Latte", price: 4.5, categoryId: "5", image: matcha },
];

const User: React.FC = () => {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const filteredDrinks = drinks.filter(
    (drink) => drink.categoryId === categoryId
  );
  const [cart, setCart] = useState<Drink[]>([]);

  const addToCart = (drink: Drink) => {
    setCart([...cart, drink]);
    alert(`${drink.name} added to cart`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selected Drinks</Text>

      <FlatList
        data={filteredDrinks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.drinkItem}>
            <Image source={item.image} style={styles.drinkImage} />
            <View style={styles.drinkInfo}>
              <Text style={styles.drinkName}>{item.name}</Text>
              <Text style={styles.drinkPrice}>${item.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Cart Section */}
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Your Cart</Text>
        <ScrollView>
          {cart.map((item, index) => (
            <Text key={index} style={styles.cartItem}>
              {item.name} - ${item.price.toFixed(2)}
            </Text>
          ))}
        </ScrollView>
      </View>
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
  drinkItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  drinkImage: {
    width: 250,
    height: 150,
    marginBottom: 8,
    borderRadius: 8,
  },
  drinkInfo: {
    alignItems: "center",
    marginBottom: 8,
  },
  drinkName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3e2723",
    marginVertical: 4,
  },
  drinkPrice: {
    fontSize: 16,
    color: "#795548",
  },
  addButton: {
    backgroundColor: "#6f4e37",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fafafa",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3e2723",
    marginBottom: 8,
    textAlign: "center",
  },
  cartItem: {
    fontSize: 16,
    color: "#795548",
    paddingVertical: 4,
    textAlign: "center",
  },
});

export default User;
