import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from "react-navigation";
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Deposit from "../screens/Deposit";
import Withdraw from "../screens/Withdraw";
import Send from "../screens/Send";

const iconsStyle = {
  fontSize: 30
}

export const SignedOut = StackNavigator({
  SignUp: {
      screen: SignUp,
      navigationOptions: {
          title: "Sign Up"
      }
  },
  SignIn: {
      screen: SignIn,
      navigationOptions: {
          title: "Sign In"
      }
  }
});

export const SignedIn = TabNavigator({
Home: {
  screen: Home
},
Deposit: {
  screen: Deposit,
},
Withdraw: {
  screen: Withdraw,
},
Send: {
  screen: Send,
},
Profile: {
  screen: Profile,
}
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#4458ba',
      }
  },
  navigationOptions: ({ navigation }) => ({
      tabBarIcon: (props) => {
        switch(navigation.state.routeName) {
            case 'Home':
                return (
                    <Icon name='home' style={iconsStyle} />
                );
            case 'Deposit':
                return (
                    <Icon name='currency-usd-off' style={iconsStyle} />
                );
            case 'Withdraw':
                return (
                    <Icon name='chart-line' style={iconsStyle} />
                );
            case 'Send':
                return (
                    <Icon name='cube-send' style={iconsStyle} />
                );
            case 'Profile':
                return (
                    <Icon name='account-card-details' style={iconsStyle} />
                );
            default:
              return null;
        }
      }
  }),

});

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
      {
          SignedIn: {
              screen: SignedIn
          },
          SignedOut: {
              screen: SignedOut
          }
      },
      {
          initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
  );
};


