import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥷💻🌙</Text>

      <Text style={styles.titel}>Night Coding Ninja</Text>

      <Text style={styles.beskrivelse}>
        Skriver kode sent om natten og løser problemer, mens resten af verden sover.
      </Text>

      <Text style={styles.beskrivelse}>
        Statistik: 93% af alle gode idéer kommer efter kl. 23:41.
      </Text>

      <Text style={styles.beskrivelse}>
        "Usynlig om dagen. Ustoppelig om natten."
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1020',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 20,
  },
  titel: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  beskrivelse: {
    fontSize: 18,
    color: '#d1d5db',
    textAlign: 'center',
    marginBottom: 15,
  },
});