import React from "react";
import { ImageBackground, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { SearchBar } from "react-native-elements";
import Accordion from "./Accordion";
import FissureComponent from "./FissureComponent";

interface Props {

}

export default class CyclesPage extends React.Component<Props> {
    state = {
        loading: false,
        data: [],
        value: '',
        error: null,
    }

    arrayholder = [];

    componentDidMount() {
        this.loadData()
    }

    keyExtractor = (item: any, index: any) => index.toString()

    compare(a: any, b: any) {
        if (a.tier < b.tier) {
            return -1;
        }
        if (a.tier > b.tier) {
            return 1;
        }
        return 0;
    }

    loadData = () => {
        this.setState({ loading: true });
        fetch('https://api.warframestat.us/swi/fissures').then((res) => res.json()).then((json) => {
            this.setState({
                data: json,
                error: json.error || null,
                loading: false,
            });
            json.sort(this.compare);
            this.arrayholder = json;
            this.arrayholder.sort(this.compare)

        }).catch((error) => {
            console.log(error)
        });
    }

    searchFilterFunction = (text: string) => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.tier.toUpperCase()}`;
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
                        ListHeaderComponent={this.renderHeader}
                        keyExtractor={this.keyExtractor}
                        renderItem={({ item }) => <Accordion key={item.id} childComponent={<FissureComponent fissure={item}></FissureComponent>} title={"Fissure " + item.tier} titleRight={item.eta}></Accordion>}
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
});