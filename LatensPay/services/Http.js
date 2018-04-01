import { AsyncStorage } from "react-native";
export const API_URL = "https://evening-springs-19512.herokuapp.com/";
export const CONTENT_TYPE = "application/json; charset=utf-8";

export const getCall = async (url, params) => {
    try {
        const TOKEN = await AsyncStorage.getItem('token') || -1;
        let response = await fetch(
            API_URL + url, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + TOKEN,
                    'Content-Type': CONTENT_TYPE 
                },
                method: 'GET'
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}

export const postCall = async (url, params) => {
    try {
        const TOKEN = await AsyncStorage.getItem('token');
        let response = await fetch(
            API_URL + url,
            {
                body: JSON.stringify(params),
                headers: {
                    'Accept': CONTENT_TYPE ,
                    'Access-Control-Allow-Rigin': '*',
                    'Authorization': 'Bearer ' + TOKEN,
                    'Content-Type': CONTENT_TYPE
                },
                method: 'POST'
            }
        );
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        return error;
    }
}

