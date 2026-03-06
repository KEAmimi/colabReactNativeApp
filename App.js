import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MikkelsPage } from "./components/mikkelsComponent";

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
    <View>
      <Text>Dette er landing pagen for vores collaborative app</Text>
      <Pressable
        onPress={() => {
          navigateTo("MikkelsPage");
        }}
      >
        <Text>MikkelsPage</Text>
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
});
