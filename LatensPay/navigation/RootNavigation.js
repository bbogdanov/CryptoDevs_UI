import {
    StackNavigator,
    TabNavigator,
    SwitchNavigator
} from "react-navigation";
import React, { Component } from 'react';
import FontAwesome from 'react-native';

import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Deposit from "../screens/Deposit";
import Withdraw from "../screens/Withdraw";
import Send from "../screens/Send";

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
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            //   tabBarIcon: ({ tintColor }) => (
            //     <FontAwesome name="home" size={30} color={tintColor} />
            //   )
        }
    },
    Deposit: {
        screen: Deposit,
        navigationOptions: {
            tabBarLabel: "Deposit",
            //   tabBarIcon: ({ tintColor }) => (
            //     <FontAwesome name="home" size={30} color={tintColor} />
            //   )
        }
    },
    Withdraw: {
        screen: Withdraw,
        navigationOptions: {
            tabBarLabel: "Withdraw",
            //   tabBarIcon: ({ tintColor }) => (
            //     <FontAwesome name="home" size={30} color={tintColor} />
            //   )
        }
    },
    Send: {
        screen: Send,
        navigationOptions: {
            tabBarLabel: "Send",
            //   tabBarIcon: ({ tintColor }) => (
            //     <FontAwesome name="home" size={30} color={tintColor} />
            //   )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile",
            //   tabBarIcon: ({ tintColor }) => (
            //     <FontAwesome name="user" size={30} color={tintColor} />
            //   )
        }
    }
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

