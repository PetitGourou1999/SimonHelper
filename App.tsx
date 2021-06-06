import React from 'react';
import SimonPage from './src/components/SimonPage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CetusPage from './src/components/CetusPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import { drawerItemsMain } from './src/navigation/DrawerItems';
import CustomHeader from './src/components/CustomHeader';
import ModsPage from './src/components/ModsPage';
import CyclesPage from './src/components/CyclesPage';
import FissuresPage from './src/components/FissuresPage';
import CetusMapPage from './src/components/CetusMapPage';
import WeaponsPage from './src/components/WeaponsPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Simon"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}>
      <Drawer.Screen name="Simon" component={SimonPage} />
      <Drawer.Screen name="Cetus Bounties" component={CetusPage} />
      <Drawer.Screen name="Plains Map" component={CetusMapPage} />
      <Drawer.Screen name="Mods Locations" component={ModsPage} />
      <Drawer.Screen name="Cycles" component={CyclesPage} />
      <Drawer.Screen name="Fissures" component={FissuresPage} />
      <Drawer.Screen name="Weapons Required as Crafting Ingredients" component={WeaponsPage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#404554',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          header: (props) => {
            return <CustomHeader {...props} />;
          },
        }}>
        <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

