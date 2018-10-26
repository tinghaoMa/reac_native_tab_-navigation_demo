/**
 * @author itck_mth
 * @time 2018/10/26 12:37 PM
 * @class describe
 */


/**
 * @author itck_mth
 * @time 2018/10/26 11:32 AM
 * @class describe
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class WelcomePage extends React.Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {this.renderButton('App')}
                {this.renderButton('MyPage')}
                {this.renderButton('MyPage2')}
            </View>
        );
    }


    renderButton(msg) {
        return <TouchableOpacity
        >
            <Text
                onPress={

                    () => {
                        const {navigation} = this.props;
                        navigation.navigate(msg)
                    }
                }

            >{msg}</Text>
        </TouchableOpacity>
    }
}
