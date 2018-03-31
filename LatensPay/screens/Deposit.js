import React, {Component} from 'react';
import { Container, Header, Content, Body, Title, Item, Input, Label } from 'native-base';

export default class Deposit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btcAddress: '13493841934819414',
            ethAddress: '13493841934819414'
        };
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Deposit
                        </Title>
                    </Body>
                </Header>
                <Content>
                    <Item stackedLabel style={{ marginTop: 60 }}>
                        <Label>Your account bitcoin address:</Label>
                        <Input disabled value={this.state.btcAddress}/>
                    </Item>
                    <Item stackedLabel style={{ marginTop: 60 }}>
                        <Label>Your account ethereum address:</Label>
                        <Input disabled value={this.state.ethAddress}/>
                    </Item>
                </Content>
            </Container>
        )
    }
}