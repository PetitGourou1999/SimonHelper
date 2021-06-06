import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';

interface Props {
    drawerItems: any
    navigation: any
}

export default class CustomDrawerContent extends React.Component<Props> {
    onItemPress = (key: any) => {
        const filteredMainDrawerRoutes = this.props.drawerItems.find((e: any) => {
            return e.key === key;
        });
        const selectedRoute = filteredMainDrawerRoutes.route;
        this.props.navigation.toggleDrawer();
        this.props.navigation.navigate(selectedRoute.nav, {
            screen: selectedRoute.routeName,
        });
    };

    renderMainDrawer() {
        return (
            <View>{this.props.drawerItems.map((parent: any) => (
                <View key={parent.key}>
                    <TouchableOpacity
                        key={parent.key}
                        testID={parent.key}
                        onPress={() => {
                            this.onItemPress(parent.key);
                        }}>
                        <View style={styles.parentItem}>
                            <Text style={[styles.title]}>{parent.title}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
            </View>
        );
    }
    render() {
        return (
            <ScrollView style={styles.drawerContainer}>
                <SafeAreaView
                    style={styles.container}
                >
                    <View style={styles.centered}>
                        <Image
                            source={require('../../assets/naviLogo.png')}
                            style={styles.logo}
                            resizeMode={'contain'}
                        />
                    </View>
                    {this.renderMainDrawer()}
                </SafeAreaView>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 120,
        width: '100%',
    },
    drawerContainer: {
        width: "100%",
        backgroundColor: '#222222',
    },
    container: {
        width: "100%",
        flex: 1,
        zIndex: 1000,
    },
    centered: {
        alignItems: 'center',
        width: "100%"
    },
    parentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        paddingTop: 4,
        paddingBottom: 4,
    },
    title: {
        margin: 16,
        fontWeight: 'bold',
        color: '#F0F0F0',
        //textAlign: 'center',
        fontFamily: 'Futura'
    },
});
