import React from 'react';
import {Text, View} from 'react-native';
import {FieldsRow} from "../components/FieldsRow";

export default ({navigation}) => (
    <View style={{
        flex: 1,
        flexDirection: 'column',
    }}>
        <FieldsRow account={'ETH'} currency={'Ethereum'} rating={'409.37'} balance={20} />

        <FieldsRow account={'Bitcoin'} currency={'Bitcoin'} rating={'7100.01'} balance={10.123} />
    </View>
);