import React from 'react';
import {Content, H3, List, ListItem, Text} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class FieldsRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            balance:  props.balance  || 0,
            currency: props.currency || 'ETH',
            rating:   props.rating   || '0.00002'
        }
    }

    currencyIcon(props) {
        switch (props.currency) {
            case 'ETH':
                return 'currency-eth';
            case 'BTC':
                return 'bitcoin';
            default:
                return null;
        }
    }

    render() {
        const currency = 'USD';

        const colStyles = {
            height: 100,
        };

        const iconStyles = {
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 30
        }

        const header = {
            flex: 1,
            paddingTop: 15,
            fontWeight: 'bold'
        };

        const middle = {
            flex: 1,
            textAlign: 'center',
            paddingTop: 15,
        }

        const footer = {
            flex: 1,
            textAlign: 'center',
        }

        const icon = this.currencyIcon(this.props);

        return (
            <Content>
                <List>
                    <ListItem style={{flex: 1, flexDirection: 'row'}}>
                        <H3 style={header}> {this.props.currency} </H3>
                        <Text style={{flex: 1, textAlign: 'right'}}> {(Number(this.props.rating).toString().slice(0, 7))} &#036; </Text>
                    </ListItem>
                </List>

                <Grid>
                    <Col style={colStyles}>
                        <Icon name={icon} style={iconStyles}></Icon>
                    </Col>
                    <Col style={colStyles}>
                        <H3 style={middle}> {this.props.balance} </H3>
                    </Col>
                </Grid>

                <Grid>
                    <Col style={colStyles}>
                        <H3 style={footer}> {currency} </H3>
                    </Col>
                    <Col style={colStyles}>
                        <H3 style={footer}> {(this.props.balance * Number(this.props.rating)).toString().slice(0, 7)} &#036; </H3>
                    </Col>
                </Grid>
            </Content>
        );
    }
}