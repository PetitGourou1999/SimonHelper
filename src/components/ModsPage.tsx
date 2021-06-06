import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Accordion from './Accordion';
import AccordionChildBounty from './AccordionChildBounty';
import AccordionChildMod from './AccordionChildMod';

interface Props {

}

class FlatListDemo extends React.Component<Props> {
    state = {
        loading: false,
        data: [],
        error: null,
        value: ''
    };

    arrayholder = [];

    componentDidMount() {
        this.makeRemoteRequest();
    }

    compare(a: any, b: any) {
        if (a.modName < b.modName) {
            return -1;
        }
        if (a.modName > b.modName) {
            return 1;
        }
        return 0;
    }

    makeRemoteRequest = () => {
        const url = `https://drops.warframestat.us//data/modLocations.json`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.modLocations,
                    error: res.error || null,
                    loading: false,
                });
                this.arrayholder = res.modLocations;
                this.arrayholder.sort(this.compare)

            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    searchFilterFunction = (text: string) => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.modName.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Rechercher..."
                platform='default'
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };

    render() {
        if (this.state.loading) {
            return (
                <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>
                    <View style={styles.container}>
                        <ActivityIndicator />
                    </View>
                </ImageBackground>
            );
        }
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>

                <View style={styles.container}>
                    <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={this.state.data}
                        renderItem={({ item }) => <Accordion key={item._id} childComponent={<AccordionChildMod enemies={item.enemies}></AccordionChildMod>} title={item.modName}></Accordion>}
                        keyExtractor={item => item._id}
                        ListHeaderComponent={this.renderHeader}
                    />
                </View>
            </ImageBackground>
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
    }
});

export default FlatListDemo;