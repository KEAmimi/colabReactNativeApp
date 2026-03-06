import { View, Text, StyleSheet } from "react-native-web";

export function SarahKomponent() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Prokrastination</Text>

      <View style={styles.card}>
        <Text style={styles.story}>
          Min superkraft er prokrastination,</Text>
          <Text style={styles.story}>jeg udsætter alt uden frustration.</Text>
          <Text style={styles.story}>Deadlines kommer, jeg tager det roligt,</Text>
          <Text style={styles.story}>og klarer det altid - til sidst, utroligt.
        </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f7f2",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2e7d32",
    marginTop: 40,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#4e944f",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "100%",
  },

  story: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});