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
            case 'ETH':
                return 'currency-eth';
                break;
            case 'BTC':
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
            height: 100,
            paddingLeft:20
        };

        const iconStyles = {
            paddingTop: 20,
            paddingLeft:40,
            fontSize: 20
        }

        const header = {
            flex: 1,
            paddingTop: 15,
            fontWeight: 'bold'
        };

        const middle = {
            flex: 1,
            paddingTop: 15,
            paddingLeft: 40
        }

        const footer = {
            flex: 1,
            paddingLeft: 40
        }



        const icon = this.currencyIcon(this.props);

        return (
            <Content>
                <List>
                    <ListItem style={{flex: 1, flexDirection: 'row'}}>
                        <H3 style={header}> {this.state.currency} </H3>
                        <Text style={{flex: 1, textAlign: 'right'}}> {(Number(this.state.rating).toString().slice(0, 7))} &#036; </Text>
                    </ListItem>
                </List>

                <Grid>
                    <Col style={colStyles}>
                        <Icon name={icon} style={iconStyles}></Icon>
                    </Col>
                    <Col style={colStyles}>
                        <H3 style={middle}> {this.state.balance} </H3>
                    </Col>
                </Grid>

                <Grid>
                    <Col style={colStyles}>
                        <H3 style={footer}> {currency} </H3>
                    </Col>
                    <Col style={colStyles}>
                        <H3 style={footer}> {(this.state.balance * Number(this.state.rating)).toString().slice(0, 7)} &#036; </H3>
                    </Col>
                </Grid>
            </Content>
        );
    }
}