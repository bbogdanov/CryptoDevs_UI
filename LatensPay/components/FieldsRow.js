import React from 'react';
import {Text, View} from 'react-native';

export class FieldsRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            balance: props.balance || 0,
            currency: props.currency || 'Ethereum',
            rating: props.rating || '0.00002'
        }
    }

    render() {
        const oneCryptoValue = 1;
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'green' }}>
                <View style={{ flex: 1,  flexDirection: 'row'}}>
                    <Text style={{flex: 1, backgroundColor: 'red'   }}> {this.state.currency} </Text>
                    <Text style={{flex: 1, backgroundColor: 'yellow'}}> {this.state.rating  } </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{flex: 1, backgroundColor: 'red'   }}> { oneCryptoValue                            } </Text>
                    <Text style={{flex: 1, backgroundColor: 'yellow'}}> { oneCryptoValue / Number(this.state.rating)} </Text>
                </View>
            </View>
        );
    }
}