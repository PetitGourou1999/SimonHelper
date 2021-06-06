import React from 'react'
import { FlatList, ImageBackground, StyleSheet, View, Text } from 'react-native';
import Accordion from './Accordion';
import AccordionChildBounty from './AccordionChildBounty';

interface Props {
}

export default class CetusPage extends React.Component<Props> {

    state = {
        arrayholder: []
    }

    componentDidMount() {
        this.loadData()

    }
    keyExtractor = (item: any, index: any) => index.toString()

    loadData = () => {
        fetch('https://drops.warframestat.us//data/cetusBountyRewards.json').then((res) => res.json()).then((json) => {

            this.setState({
                arrayholder: json.cetusBountyRewards
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {

        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>
                <View style={styles.container}>
                    <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={this.state.arrayholder}
                        keyExtractor={this.keyExtractor}
                        //renderItem={({ item }) => <Text key={item._id} style={styles.item}>{item.bountyLevel}</Text>}
                        renderItem={({ item }) => <Accordion key={item._id} childComponent={<AccordionChildBounty rewards={item.rewards}></AccordionChildBounty>} title={item.bountyLevel}></Accordion>}
                    />
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    item: {
        color: 'white',
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});