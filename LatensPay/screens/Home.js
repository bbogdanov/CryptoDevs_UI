import React from 'react';
import {FieldsRow} from "../components/FieldsRow";
import { Container, Header, Content, Body, Title } from 'native-base';

export default ({navigation}) => (
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

            <FieldsRow currency={'ETH'} rating={'409.37'} balance={20} />

            <FieldsRow currency={'BTC'} rating={'7100.01'} balance={10.123} />
        </Content>
    </Container>
);