import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MikkelsPage } from "./components/mikkelsComponent";
import { maltheComponent } from "./components/maltheComponent";
import { NikoPage } from "./components/nikoNightNinja";
import { sofusComponent } from "./components/sofusComponent";
import { SarahKomponent } from "./components/SarahScreen";
import { mathiasComponent } from "./components/mathiasComponent";
import { jacobComponent } from "./components/jacobScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="MikkelsPage" component={MikkelsPage} />
          <Stack.Screen name="MalthePage" component={maltheComponent} />
          <Stack.Screen name="NikoPage" component={NikoPage} />
          <Stack.Screen name="SofusPage" component={sofusComponent} />
          <Stack.Screen name="SarahPage" component={SarahKomponent} />
          <Stack.Screen name="MathiasPage" component={mathiasComponent} />
          <Stack.Screen name="JacobPage" component={jacobComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function LandingPage({ navigation, route }) {
  function navigateTo(page) {
    navigation.navigate(page);
  }

  return (
    <View style={styles.page}>
      <Text>Dette er landing pagen for vores collaborative app</Text>
      <Pressable
        onPress={() => {
          navigateTo("MikkelsPage");
        }}
        style={styles.button}
      >
        <Text>Mikkels Page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigateTo("MalthePage");
        }}
        style={styles.button}
      >
        <Text>Malthes Page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigateTo("NikoPage");
        }}
        style={styles.button}
      >
        <Text>Nikos Page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigateTo("SofusPage");
        }}
        style={styles.button}
      >
        <Text>Sofus' Page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigateTo("SarahPage");
        }}
        style={styles.button}
      >
        <Text>Sarahs Page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigateTo("MathiasPage");
        }}
        style={styles.button}
      >
        <Text>Mathias' Page</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigateTo("JacobPage");
        }}
        style={styles.button}
      >
        <Text>Jacobs Page</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  page: {
    padding: 10,
    gap: 20,
  },
});
