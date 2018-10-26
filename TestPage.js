/**
 * @author itck_mth
 * @time 2018/10/26 11:32 AM
 * @class describe
 */

import React, {Component} from 'react';
import {Text, View,} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

var num = 0;

export default class TestPage extends React.Component {


    constructor(props) {
        super(props);
        num = this.props.navigation.getParam('key', 1);
        console.log(`constructor ${num}`);
        this.state = {
            value: num
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    render() {
        console.log('render');
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text
                    style={{color: 'red', fontSize: 20, fontWeight: '500'}}
                    onPress={() => {
                        console.log(`num = ${num}`);
                        let key = num + 1;
                        console.log(`key = ${key}`);
                        if (key === 3) {
                            //重置到TestPage并且覆盖在MyPage之上 index就是下面actions数组里面的索引
                            const resetAction = StackActions.reset({
                                index: 1,
                                actions: [
                                    NavigationActions.navigate({routeName: 'MyPage'}),
                                    NavigationActions.navigate({routeName: 'TestPage', params: {'key': 100,}})
                                ]
                            })
                            this.props.navigation.dispatch(resetAction)
                        } else {
                            this.props.navigation.push('TestPage', {
                                key: key
                            })

                            // this.props.navigation.navigate('TestPage', {
                            //     key: key
                            // })
                        }
                    }}>{this.state.value}</Text>
            </View>
        );
    }
}