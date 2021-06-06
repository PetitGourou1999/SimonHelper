import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import LinearGradient from 'react-native-linear-gradient';

interface Props {
    name: string
    margin: number
    size: number
    color: string
    textColor: string
    fontSize: number
    text: string
    isIcon: boolean
}

let myIcon: any = []
export default class CircleButton extends React.Component<Props> {
    render() {
        let txtDisplay = {}
        if (this.props.isIcon) {
            txtDisplay = { display: 'none' }
            myIcon.push(<Ionicons
                key={this.props.name}
                name='refresh'
                size={70}
                color={this.props.textColor}></Ionicons>)
        } else {
            myIcon = []
            txtDisplay = {}
        }
        return (
            <ImageBackground imageStyle={{
                backgroundColor: this.props.color,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: this.props.size * 2,
                resizeMode: 'cover'
            }} source={
                (this.props.text === '' && !this.props.isIcon) ? require('../../assets/gradient3.png') : (this.props.isIcon ? require('../../assets/gradientReset.png') : require('../../assets/gradient.png'))}
                style={{
                    margin: this.props.margin,
                    height: this.props.size,
                    width: this.props.size,
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: this.props.size * 2,
                }}>
                <Text style={[{ fontFamily: 'Futura', color: this.props.textColor, fontWeight: 'bold', fontSize: this.props.fontSize }, txtDisplay]}>
                    {this.props.text}
                </Text>
                {myIcon}
            </ImageBackground>
        );
    }

}