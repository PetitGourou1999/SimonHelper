import React from 'react'
import { ImageBackground, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Card, Header, ListItem, SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const primary = ["Boltor + Kronen (melee) → Boltace (melee)",
    "Cernos → Mutalist Cernos",
    "Drakgoon → Zarr",
    "2x Grakata → Twin Grakatas (secondary)",
    "Latron → Tiberon",
    "Miter (Drop de Boss) + Hikou (secondary) → Panthera",
    "Mutalist Cernos → Proboscis Cernos"]

const secondary = ["Akbolto + Dual Skana (melee) → Akjagara",
    "Akstiletto (Dojo) → Aksomati",
    "Akstiletto (Dojo) → Sarpa (melee)",
    "Atomos + Dual Zoren (melee) → Twin Basolk (melee)",
    "2x Bolto → Akbolto",
    "Bolto + Viper → Hystrix",
    "2x Bronco → Akbronco",
    "2x Bronco Prime → Akbronco Prime",
    "2x Cestra → Dual Cestra (Dojo)",
    "Furis → Afuris",
    "Gammacor → Heliocor (melee)",
    "Hikou + Miter (primary) → Panthera (primary)",
    "2x Kohmak (Dojo) → Twin Kohmak (Drop de Boss)",
    "Kraken → Kulstar",
    "Kunai + Bo (melee) → Tipedo (melee)",
    "Lato (Market) → Bolto",
    "2x Lex (Market) → Aklex",
    "2x Lex Prime → Aklex Prime (Vaulted)",
    "2x Magnus → Akmagnus",
    "2x Vasto → Akvasto",
    "Vasto + Dual Skana (melee) → Redeemer (melee)",
    "2x Vasto Prime → Akvasto Prime V",
    "2x Viper → Twin Vipers"]

const melee = ["Amphis → Sydon D",
    "Ankyros → Tekko",
    "Ankyros + Dual Cleavers → Ripkas",
    "Bo → Cadus (China Only)",
    "Bo + Kunai (secondary)	→ Tipedo",
    "Broken War → War",
    "Dual Kamas → Raza (Dojo)",
    "Dual Skana → Dark Split-Sword (Dojo)",
    "Dual Skana + Akbolto (secondary) → Akjagara (secondary)",
    "Dual Skana + Vasto (secondary) → Redeemer",
    "Dual Zoren + Atomos (secondary) → Twin Basolk",
    "Furax → Knux (Dojo, arch-melee)",
    "Galatine → Paracesis",
    "Kama → Dual Kamas",
    "Kogake → Hirudo",
    "Krohkur → Twin Krohkur (Dojo)",
    "Kronen + Boltor (primary) → Boltace",
    "Magistar → Sibear",
    "Nikana (Dojo) → Dragon Nikana",
    "Ninkondi → Shaku (Dojo)",
    "Tipedo → Lesion"]

interface Props {

}

export default class WeaponsPage extends React.Component<Props> {
    state = {
        loading: false,
        data: [],
        value: '',
        error: null,
    }

    arrayholder = ['foo', 'foo'];

    keyExtractor = (item: any, index: any) => index.toString()

    loadData = () => {
        let finalArray = []
        for (let weapon of primary) {
            finalArray.push(weapon)
        }
        for (let weapon of secondary) {
            finalArray.push(weapon)
        }
        for (let weapon of melee) {
            finalArray.push(weapon)
        }
        this.arrayholder = finalArray
        this.setState({
            data: finalArray,
            error: null,
            loading: false,
        });
    }

    searchFilterFunction = (text: string) => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };

    constructContent(myArray: any) {
        let content = []
        let cpt = 0
        for (let weapon of myArray) {
            content.push(
                <ListItem key={cpt} bottomDivider containerStyle={styles.backgroud}>
                    <ListItem.Content style={styles.backgroud}>
                        <ListItem.Title style={[styles.text, { textAlign: 'left' }]}>{weapon}</ListItem.Title>

                    </ListItem.Content>
                </ListItem>
            )
            cpt++
        }
        return content

    }
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

        var content1 = this.constructContent(primary);
        var content2 = this.constructContent(secondary);
        var content3 = this.constructContent(melee);

        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>


                <ScrollView style={{ width: '100%' }} contentContainerStyle={{ width: '95%' }}>
                    <Card wrapperStyle={styles.backgroud} containerStyle={styles.cardContainer} >
                        <Card.Title style={styles.text}>ARMES PRINCIPALES</Card.Title>
                        <Card.Divider />
                        {content1}
                    </Card>
                    <Card wrapperStyle={styles.backgroud} containerStyle={styles.cardContainer} >
                        <Card.Title style={styles.text}>ARMES SECONDAIRES</Card.Title>
                        <Card.Divider />
                        {content2}
                    </Card>
                    <Card wrapperStyle={styles.backgroud} containerStyle={styles.cardContainer} >
                        <Card.Title style={styles.text}>ARMES DE MELEE</Card.Title>
                        <Card.Divider />
                        {content3}
                    </Card>

                </ScrollView>

            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        width: '100%',
    },
    cardContainer: {
        borderWidth: 0,
        width: '100%',
        //height: '100%',
        backgroundColor: "transparent",
        padding: 0
    },
    backgroud: {
        backgroundColor: "#333333"
    },
    text: {
        width: '100%',
        fontSize: 16,
        fontFamily: 'Futura',
        color: '#FFFFFF',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 30
    }
});