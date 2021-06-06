import React, { useState } from 'react'
import { FlatList, ImageBackground, StyleSheet, View, Text, SafeAreaView, TouchableHighlight, Image } from 'react-native';
import ImageViewing from 'react-native-image-viewing/dist/ImageViewing';

const images: any[] = [
    {
        uri: 'https://i.imgur.com/f6pVmZZ.png',
    }
]


interface Props {
}

export default class CetusMapPage extends React.Component<Props> {

    state = {
        isVisible: false
    }

    onSelect = () => {
        this.setState({
            isVisible: true,
        })
    };

    onRequestClose = () => {
        this.setState({
            isVisible: false
        })

    }
    setIsVisible = (bool: boolean) => {
        this.setState({
            visible: bool
        })
    }

    render() {

        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>
                <SafeAreaView style={styles.container}>
                    <TouchableHighlight style={{ width: '80%' }} onPress={() => this.onSelect()}>
                        <Image style={{
                            width: '100%',
                            height: undefined,
                            aspectRatio: 1,
                            resizeMode: 'contain'
                        }} source={require('../../assets/cetusMap.png')} />
                    </TouchableHighlight>

                    <ImageViewing
                        images={images}
                        imageIndex={0}
                        presentationStyle="overFullScreen"
                        visible={this.state.isVisible}
                        onRequestClose={this.onRequestClose}


                    />

                </SafeAreaView>

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
