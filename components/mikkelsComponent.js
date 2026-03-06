import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export function MikkelsPage({ navigation, route }) {
  return (
    <View style={styles.basicBox}>
      <Text style={styles.title}>Dette er Mikkels side</Text>

      <View style={styles.card}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Dette er titlen på denne box</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.body}>
            Dette er brød tekst, Dette er brød tekst, Dette er brød tekst, Dette
            er brød tekst, Dette er brød tekst, Dette er brød tekst, Dette er
            brød tekst, Dette er brød tekst,{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basicBox: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    padding: 10,
    gap: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    gap: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  body: {
    fontSize: 15,
    opacity: 0.7,
    lineHeight: 22,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  titleBox: {},
  textBox: {},
});
