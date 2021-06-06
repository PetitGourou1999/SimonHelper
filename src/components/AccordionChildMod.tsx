import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    findNodeHandle,
} from 'react-native';
import Accordion from './Accordion';


interface Props {
    enemies: any
}

let rarities = ['Common', 'Uncommon', 'Rare']
let colors = ['#c19c91', '#fbfbfd', '#f6f0dd']

export default class AccordionChildMod extends React.Component<Props> {
    keyExtractor = (item: any, index: any) => index.toString()

    makeContent() {

        let final = []
        let common = []
        let uncommon = []
        let rare = []
        for (let enemy of this.props.enemies) {
            if (enemy.rarity === 'Uncommon') {
                uncommon.push(enemy)
            } else if (enemy.rarity === 'Common') {
                common.push(enemy)
            } else if (enemy.rarity === 'Rare') {
                rare.push(enemy)
            }
        }
        final.push(common)
        final.push(uncommon)
        final.push(rare)

        return (<FlatList
            style={{ flex: 1, width: '100%' }}
            data={final}
            keyExtractor={this.keyExtractor}
            //renderItem={({ item }) => <Text key={item._id} style={styles.item}>{item.bountyLevel}</Text>}
            renderItem={({ item, index }) => <Accordion key={item._id} childComponent={this.makeChildContent(item)} title={rarities[index]} titleColor={colors[index]}></Accordion>}
        />)
    }

    makeChildContent(enemies: any) {
        let content = []
        let cpt = 0
        for (let enemy of this.props.enemies) {
            content.push(
                <View key={cpt} style={styles.reward}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={styles.libelle}>{"Nom : "}</Text>
                        <Text style={styles.text}>{enemy.enemyName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={styles.libelle}>{"Chance que l'enemi drop un mod : "}</Text>
                        <Text style={styles.text}>{enemy.enemyModDropChance + " %"}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={styles.libelle}>{"Chance que le mod soit droppé : "}</Text>
                        <Text style={styles.text}>{enemy.chance + " %"}</Text>
                    </View>
                </View>
            )
            cpt++
        }
        return content
    }
    render() {
        let content = this.makeContent()
        return (
            <View style={styles.container}>
                {content}
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#1d1b20',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    libelle: {
        fontSize: 11,
        color: "#AAAAAA",
        fontFamily: 'Futura'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "white",
        fontFamily: 'Futura'
    },
    reward: {
        paddingVertical: 20,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    }
});

