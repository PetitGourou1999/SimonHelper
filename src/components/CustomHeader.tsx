import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    navigation: any
}
export default class CustomHeader extends React.Component<Props> {
    toggleDrawer = () =>
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());

    render() {
        return (
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            onPress={this.toggleDrawer}
                            style={styles.leftButton}
                            testID="CustomHeader-toggleDrawer">
                            <Ionicons
                                name='menu-outline'
                                size={50}
                                color={'#ddd'}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <Text style={styles.headerTxt}>WARFRAME HELPER</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#222222',
        minHeight: 50,
    },
    headerLeft: {
        flexDirection: 'row',
    },
    leftButton: {
        marginLeft: 10,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: 40,
    },
    buttonTxt: {
        color: '#ddd',
        fontWeight: 'bold',
        fontSize: 10
    },
    headerTxt: {
        color: '#ddd',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

