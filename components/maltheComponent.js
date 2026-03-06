import React from "react";
import {View, Text, StyleSheet} from "react-native";


export function maltheComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>👀</Text>

            <Text style={styles.text}>Superkraft: full stack-fejlfinder</Text>

            <Text style={styles.description}>min bedste ven er mod min vilje min compiler</Text>

            <Text style={styles.stat}>Statistik: Har fået 3281 compilefejl siden frokost</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8f4ff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    emoji: {
        fontSize: 60,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
    },
    stat: {
        fontSize: 16,
        fontStyle: "italic",
        color: "#555",
    },
});