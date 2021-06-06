import React from 'react'
import { ImageBackground, ImageBackgroundBase, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import CircleButton from './CircleButton';

interface Props {

}

let myButtons: any = []
const buttonNames = ["Btn1", "Btn2", "Btn3", "Btn4", "Btn5", "Btn6"]

export default class SimonPage extends React.Component<Props> {
    state = {
        touchCpt: 1,
        txtButtons: ['', '', '', '', '', ''],
    }

    buttonReset = (<TouchableOpacity onPress={() => this._reset()}>
        <CircleButton
            name={"BtnReset"}
            size={120}
            color="#736743"
            textColor="white"
            margin={5}
            fontSize={5}
            text={''}
            isIcon={true}
        />
    </TouchableOpacity>)

    _createButtons() {
        for (let i = 0; i < 6; i++) {
            myButtons[i] = (
                <TouchableOpacity onPress={() => this._changeButtonText(i)}>
                    <CircleButton
                        name={buttonNames[i]}
                        size={100}
                        color="#b9a772"
                        textColor="white"
                        margin={20}
                        fontSize={20}
                        text={this.state.txtButtons[i]}
                        isIcon={false}
                    />
                </TouchableOpacity>)
        }
    }

    _reset = () => {
        this.setState({ touchCpt: 1 })
        this.setState({ txtButtons: ['', '', '', '', '', ''] })
    }

    _changeButtonText = (buttonNumber: number) => {
        let tmpArray = this.state.txtButtons

        if (tmpArray[buttonNumber] === '') {
            this.setState({ touchCpt: this.state.touchCpt + 1 })
            tmpArray[buttonNumber] = this.state.touchCpt.toString()

            this.setState({ txtButtons: tmpArray })

        }
    }

    render() {
        this._createButtons()
        return (
            <ImageBackground style={styles.container} imageStyle={{ resizeMode: 'cover' }} source={require('../../assets/background.png')}>
                <View style={styles.container}>
                    <View style={styles.containerButtonTop}>{myButtons[0]}{myButtons[1]}</View>
                    <View style={styles.containerButtonCenter}>{myButtons[2]}{this.buttonReset}{myButtons[3]}</View>
                    <View style={styles.containerButtonBottom}>{myButtons[4]}{myButtons[5]}</View>
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
    },
    containerButtonTop: {
        flex: 0.7,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%'
    },
    containerButtonBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%'
    },
    containerButtonCenter: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    }
});