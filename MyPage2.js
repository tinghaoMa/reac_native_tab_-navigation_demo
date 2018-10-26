/**
 * @author itck_mth
 * @time 2018/10/26 11:39 AM
 * @class describe
 */

import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // 6.2.2
import {createTabNavigator, TabBarBottom} from 'react-navigation'; // 1.0.0-beta.27

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
                <Ionicons name={"ios-add"} size={26}/>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
                <Ionicons name={"ios-home"} size={26}/>
                <Ionicons name={"logo-android"} size={26}/>

            </View>
        );
    }
}

export default createTabNavigator(
    {
        Home: {screen: HomeScreen},
        Settings: {screen: SettingsScreen},
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-remove-circle${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);
