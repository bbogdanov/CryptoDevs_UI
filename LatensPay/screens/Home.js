import React from 'react';
import {FieldsRow} from "../components/FieldsRow";
import {Body, Container, Content, Header, Title} from 'native-base';
import {API_URL, CONTENT_TYPE, getCall} from "../services/Http";
import {navigationChangedObservable} from "../navigation/RootNavigation";

export const ETH = 'ETH';
export const BTC = 'BTC';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
                ETH: 0,
                ETHRating: 0,
                BTC: 0,
                BTCRating: 0,
        }

        this.getBalance();

        this.getRating().then((data) => {
            this.setState({
                ETHRating: this.getCurrencyRating(data, ETH),
                BTCRating: this.getCurrencyRating(data, BTC),
            })
        })

        navigationChangedObservable.subscribe(() => {
            this.getBalance();

            this.getRating().then((data) => {
                this.setState({
                    ETHRating: this.getCurrencyRating(data, ETH),
                    BTCRating: this.getCurrencyRating(data, BTC),
                })
            })
        })
    }

    getRating = async () => {
        let response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=2');
        let responseJson = await response.json();
        return responseJson;
    }

    getBalance = () => {
        getCall('users/balance').then((balance) => {
            this.setState({
                    ETH: this.getCurrencyBalance(balance, ETH),
                    BTC: this.getCurrencyBalance(balance, BTC),
            })
        });
    }

    getCurrencyBalance = (props, currency) => {
        if (props && Array.isArray(props)) {
            let balance = props.find(x => x.hasOwnProperty(currency))[currency];
            return balance;
        }

        return 0;
    }

    getCurrencyRating = (props, currency) => {
        if (props && Array.isArray(props)) {
            let usd = props.find(x => x['symbol'] === currency)['price_usd'];
            return usd;
        }

        return 0;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>
                        Balance
                    </Title>
                    </Body>
                </Header>
                <Content style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <FieldsRow currency={ETH} rating={this.state.ETHRating} balance={this.state.ETH}/>

                    <FieldsRow currency={BTC} rating={this.state.BTCRating} balance={this.state.BTC}/>
                </Content>
            </Container>
        );
    }
}