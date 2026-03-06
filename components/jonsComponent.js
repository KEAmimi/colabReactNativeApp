// koden kommer her
import {View, Text, Image, StyleSheet} from 'react-native'
export function jonsComponent() {
    return(
     <View style={styles.container}>
         <Image source={require('../assets/jon_piano.png')}
            style={styles.image} />
        <Text style={styles.text}>Play or get get played!</Text>
     </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:"#ada"
    },  
    text:{
        fontSize:20,
        color:"blue",
        textAlign:'center'
    },
    image:{
        width:'100%',
        height:300
    }
})
