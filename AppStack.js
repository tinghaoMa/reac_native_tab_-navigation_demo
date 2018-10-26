/**
 * @author itck_mth
 * @time 2018/10/26 12:33 PM
 * @class describe
 */


import {
    createStackNavigator
} from 'react-navigation'

import App from './app/index';
import MyPage from './MyPage';
import MyPage2 from './MyPage2';
import WelcomePage from "./WelcomePage";
import TestPage from "./TestPage";

export default createStackNavigator({
    MyPage: {
        screen: MyPage,
    },
    MyPage2: {
        screen: MyPage2,
    },
    TestPage: {
        screen: TestPage
    },
    WelcomePage: {
        screen: WelcomePage
    },
    App: {
        screen: App,
    },



}, {
    navigationOptions: {
        header: null
    }
});