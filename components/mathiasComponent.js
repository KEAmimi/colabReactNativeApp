import { View } from 'react-native-web';
import { Text, Image } from 'react-native';

export function mathiasComponent() {
    return (
        <View style={{ padding: 20, alignItems: "center" }}>
  
  <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
    Mit superhero navn: Waste man
  </Text>

  <Image
    source={{ uri: "https://pngimg.com/uploads/simpsons/simpsons_PNG88.png" }}
    style={{ width: 120, height: 120, marginBottom: 15 }}
  />

  <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
    Hvorfor jeg hedder Waste man
  </Text>

  <View style={{ width: "100%" }}>

    <View style={{ flexDirection: "row", marginBottom: 6 }}>
      <Text style={{ marginRight: 8 }}>•</Text>
      <Text style={{ flex: 1 }}>
        god til at skimme tekst, så jeg overser ting.
      </Text>
    </View>

    <View style={{ flexDirection: "row", marginBottom: 6 }}>
      <Text style={{ marginRight: 8 }}>•</Text>
      <Text style={{ flex: 1 }}>
        bliver hurtigt distraheret.
      </Text>
    </View>

    <View style={{ flexDirection: "row", marginBottom: 6 }}>
      <Text style={{ marginRight: 8 }}>•</Text>
      <Text style={{ flex: 1 }}>
        starter ofte på noget nyt før jeg er færdig med det første.
      </Text>
    </View>

    <View style={{ flexDirection: "row", marginBottom: 6 }}>
      <Text style={{ marginRight: 8 }}>•</Text>
      <Text style={{ flex: 1 }}>
        kan læse den samme sætning tre gange uden at fange indholdet.
      </Text>
    </View>

  </View>

</View>
    )
}

