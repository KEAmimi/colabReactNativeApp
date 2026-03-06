import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

const backgroundImage = { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1280px-LEGO_logo.svg.png' };

function buttonHandler() {
    alert('Lego er alt for dyrt på en SU. Send penge på mobile pay: 22401902')

}

export function sofusComponent() {
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.textStyling}>Min superkraft er at spendere penge på lego 😎</Text>
                <Image
                    source={{ uri: 'https://www.lego.com/cdn/cs/set/assets/bltec012c948c003fba/10316_alt16.png' }}
                    style={styles.legoImage}
                />
                <Button onPress={buttonHandler} title='Hjælp' />

                <StatusBar style="auto" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    legoImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    textStyling: {
        color: 'black',
        backgroundColor: 'yellow',
        padding: 5,
        borderRadius: 4,
        overflow: 'hidden',
    }
});