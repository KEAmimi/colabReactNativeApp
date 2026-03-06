import { View } from "react-native-web";
import { Image, Text } from "react-native";

export function jacobComponent() {
  return (
    <View style={{ position: "absolute", top: 100, left: 450 }}>
      <Image source={require("../assets/jacob-Image.jpg")} style={{ width: 450, height: 450 }}></Image>
      <Text style={{ justifyContent: "center" }}> Jacob : Pipeline Disrupter</Text>
      <Text>Superpower: Can disintegrate a healthy CI/CD pipeline with his rouge pushes to main</Text>
    </View>
  );
}
