import React from 'react';
import {Text, View} from 'react-native';
import {FieldsRow} from "../components/FieldsRow";

export default ({navigation}) => (
    <View style={{
        flex: 1,
        flexDirection: 'column',
    }}>
        <FieldsRow />

        <FieldsRow />
    </View>
);