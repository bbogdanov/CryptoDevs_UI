import React from 'react';
import {Content, H3, List, ListItem, Text} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class FieldsRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            account: props.account || 'Main',
            balance: props.balance || 0,
            currency: props.currency || 'Ethereum',
            rating: props.rating || '0.00002'
        }
    }

    currencyIcon(props) {
        switch (props.currency) {
            case 'Ethereum':
                return 'currency-eth';
                break;
            case 'Bitcoin':
                return 'bitcoin';
                break;
            case 'Test':
                return null;
                break;
            default:
                return null;
        }
    }

    render() {
        const currency = 'USD';

        const colStyles = {
            height: 100
        };

        const fieldStyles = {
            flex: 1,
            paddingTop: 45,
            textAlign: 'center',
        };

        const icon = this.currencyIcon(this.props);

        return (
            <Content>
                <List>
                    <ListItem style={{flex: 1, flexDirection: 'row'}}>
                        <Icon name={icon} style={{fontSize: 20}}></Icon>
                        <Text style={{flex: 1, textAlign: 'right'}}> {(Number(this.state.rating).toString().slice(0, 7))} &#036; </Text>
                    </ListItem>
                </List>

                <Grid>
                    <Col style={colStyles}>
                        <H3 style={fieldStyles}> {this.state.currency} </H3>
                    </Col>
                    <Col style={colStyles}>
                        <H3 style={fieldStyles}> {this.state.balance} </H3>
                    </Col>
                </Grid>

                <Grid>
                    <Col style={colStyles}>
                        <H3 style={fieldStyles}> {currency} </H3>
                    </Col>
                    <Col style={colStyles}>
                        <H3 style={fieldStyles}> {(this.state.balance * Number(this.state.rating)).toString().slice(0, 7)} &#036; </H3>
                    </Col>
                </Grid>
            </Content>
        );
    }
}