/**
 * @author itck_mth
 * @time 2018/10/26 11:32 AM
 * @class describe
 */

import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings11!</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
});