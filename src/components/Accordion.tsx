import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    childComponent: any
    title: string
    titleRight?: string
    titleColor?: string
}
export default class Accordion extends React.Component<Props>{
    state = {
        expanded: false,
    }

    render() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        return (
            <View>
                <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, styles.font, { color: this.props.titleColor === undefined ? 'white' : this.props.titleColor }]}>{this.props.title}</Text>
                        <Text style={[styles.title, styles.font, { color: this.props.titleColor === undefined ? 'white' : this.props.titleColor }]}>{this.props.titleRight === undefined ? "" : this.props.titleRight}</Text>
                    </View>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'white'} />

                </TouchableOpacity>
                <View style={styles.parentHr} />
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        {this.props.childComponent}
                    </View>
                }

            </View>
        )
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "white",
    },
    font: {
        fontFamily: 'Futura'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: "#333333",
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    parentHr: {
        height: 1,
        color: 'white',
        width: '100%'
    },
    child: {
        backgroundColor: '#333333',
        padding: 16,
    }

});