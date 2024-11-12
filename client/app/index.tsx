import React, { useState } from "react";
import { View, Alert, StyleSheet, TouchableOpacity } from "react-native";
import {
  TextInput,
  Button,
  Text,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import { useRouter } from "expo-router";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6f4e37", // Coffee brown color
    background: "#f3e5d3", // Light cream for a coffee shop vibe
    text: "#3e2723", // Darker brown for text
  },
};

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "user123" && password === "pass123") {
      router.push("/Category");
    } else {
      Alert.alert("Login Failed", "Incorrect username or password");
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.title}>
          CAFELANDIA
        </Text>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
        <TouchableOpacity onPress={() => router.push("/Register")}>
          <Text style={styles.registerLink}>
            Don’t have an account? Register here
          </Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    color: theme.colors.primary,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 20,
    backgroundColor: theme.colors.background,
  },
  button: {
    marginTop: 20,
    backgroundColor: theme.colors.primary,
  },
  registerLink: {
    color: theme.colors.primary,
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default Index;
