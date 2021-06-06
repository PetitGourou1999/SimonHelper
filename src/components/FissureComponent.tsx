import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements/dist/list/ListItem";

interface Props {
    fissure: any
}

export default class FissureComponent extends React.Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{"Type de mission : " + this.props.fissure.missionType}</Text>
                <Text style={styles.text}>{"Noeud : " + this.props.fissure.node}</Text>
                <Text style={styles.text}>{"Faction : " + this.props.fissure.enemy}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: "#333333",
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "white",
        fontFamily: 'Futura'
    },
});