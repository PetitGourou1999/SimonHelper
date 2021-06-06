import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    data: any
}

export default class CycleComponent extends React.Component<Props> {
    render() {
        let title
        let icon
        let text
        if (this.props.data.isCetus != undefined && this.props.data.isCetus == true) {
            title = 'CETUS'
            if (this.props.data.isDay == true) {
                icon = <Ionicons
                    name='md-sunny-outline'
                    size={30}
                    color='#e8c86f'></Ionicons>
                text = "Nuit dans : " + this.props.data.timeLeft
            } else {
                icon = <MaterialIcons
                    name='nights-stay'
                    size={30}
                    color='#b3c5f5'></MaterialIcons>
                text = "Jour dans : " + this.props.data.timeLeft
            }
        } else {
            title = 'VALLEE ORBIS'
            if (this.props.data.isWarm == true) {
                icon = <MaterialIcons
                    name='whatshot'
                    size={30}
                    color='#f5bd95'></MaterialIcons>
                text = "Froid dans : " + this.props.data.timeLeft
            } else {
                icon = <MaterialCommunityIcons
                    name='snowflake-variant'
                    size={30}
                    color='#b3c5f5'></MaterialCommunityIcons>

                text = "Chaud dans : " + this.props.data.timeLeft
            }
        }
        return (
            <Card containerStyle={styles.container}>
                <Card.Title style={{ fontSize: 16, fontFamily: 'Futura', color: '#FFFFFF' }}>{title}</Card.Title>
                <Card.Divider />
                <View style={styles.card}>
                    {icon}
                    <Text style={{ fontSize: 16, fontFamily: 'Futura', color: '#FFFFFF' }}>{text}</Text>
                </View>
            </Card>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 44,
        backgroundColor: "#333333",
    },
    card: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 44,

    }
});