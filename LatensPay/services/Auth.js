import { AsyncStorage } from "react-native";

export const USER_KEY = "token";

export const onSignIn = (token) => AsyncStorage.setItem(USER_KEY, token);

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = async () => {
    try {
        const value = await AsyncStorage.getItem(USER_KEY);
        if (value !== null) {
            console.log(value);
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        return false;
    }
};