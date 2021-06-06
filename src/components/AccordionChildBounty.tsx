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
    rewards: any
}

export default class AccordionChildBounty extends React.Component<Props> {

    keyExtractor = (item: any, index: any) => index.toString()

    makeContent() {
        let keys = Object.keys(this.props.rewards)
        let myRewards = []
        for (let key in this.props.rewards) {
            myRewards.push(this.props.rewards[key]);
        }

        return (<FlatList
            style={{ flex: 1, width: '100%' }}
            data={myRewards}
            keyExtractor={this.keyExtractor}
            //renderItem={({ item }) => <Text key={item._id} style={styles.item}>{item.bountyLevel}</Text>}
            renderItem={({ item, index }) => <Accordion key={item._id} childComponent={this.makeAccordionContent(item)} title={keys[index]}></Accordion>}
        />)
    }

    makeAccordionContent(rewards: any) {
        let rarities = ['Common', 'Uncommon', 'Rare']
        let colors = ['#c19c91', '#fbfbfd', '#f6f0dd']
        let final = []
        let common = []
        let uncommon = []
        let rare = []
        for (let reward of rewards) {
            if (reward.rarity === 'Uncommon') {
                uncommon.push(reward)
            } else if (reward.rarity === 'Common') {
                common.push(reward)
            } else if (reward.rarity === 'Rare') {
                rare.push(reward)
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
    makeChildContent(rewards: any) {
        let content = []
        let cpt = 0
        for (let reward of rewards) {
            content.push(
                <View key={cpt} style={styles.reward}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={styles.libelle}>{"Nom : "}</Text>
                        <Text style={styles.text}>{reward.itemName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={styles.libelle}>{"Chance : "}</Text>
                        <Text style={styles.text}>{reward.chance + " %"}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={styles.libelle}>{"Stage : "}</Text>
                        <Text style={styles.text}>{reward.stage}</Text>
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

