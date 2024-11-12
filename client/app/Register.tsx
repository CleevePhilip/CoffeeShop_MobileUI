import React, { useState } from "react";
import { View, Alert, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  TextInput,
  Button,
  Provider as PaperProvider,
  DefaultTheme,
} from "react-native-paper";
import { useRouter, Href } from "expo-router";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6f4e37", // Coffee brown color
    background: "#f3e5d3", // Light cream for a coffee shop vibe
    text: "#3e2723", // Darker brown for text
  },
};

const LOGIN_ROUTE = "/" as const;
const CATEGORY_ROUTE = "/Category" as const;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (username && email && password) {
      Alert.alert("Registration Successful", "Welcome to CAFELANDIA!");
      router.push(CATEGORY_ROUTE); // Use the CATEGORY_ROUTE constant
    } else {
      Alert.alert("Registration Failed", "Please fill all fields");
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Register for CAFELANDIA</Text>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
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
        <Button mode="contained" onPress={handleRegister} style={styles.button}>
          Register
        </Button>
        <TouchableOpacity onPress={() => router.push(LOGIN_ROUTE as Href)}>
          <Text style={styles.link}>Already have an account? Login here</Text>
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
    fontSize: 24,
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
  link: {
    color: theme.colors.primary,
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default Register;
