import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import CycleComponent from './CycleComponent';

interface Props {

}

export default class CyclesPage extends React.Component<Props> {
    state = {
        dataCetus: {},
        dataOrbis: {}
    }

    componentDidMount() {
        this.loadData()
        this.loadData2()
    }

    loadData = () => {
        fetch('https://api.warframestat.us/swi/cetusCycle').then((res) => res.json()).then((json) => {

            this.setState({
                dataCetus: json
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    loadData2 = () => {
        fetch('https://api.warframestat.us/swi/vallisCycle').then((res) => res.json()).then((json) => {
            this.setState({
                dataOrbis: json
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    render() {

        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>
                <View style={styles.container}>
                    <CycleComponent data={this.state.dataCetus}></CycleComponent>
                    <CycleComponent data={this.state.dataOrbis}></CycleComponent>
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