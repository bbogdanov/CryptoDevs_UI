import React, { Component } from 'react';
import {View} from 'react-native';
import bitcoin from '../img/bitcoin-logo.png';
import { Container, Label, Form, Item, Content, Button, Input, Text } from 'native-base';
import { onSignIn } from "../services/Auth";
export default ({ navigation }) => (
    <Container>
        <Content>
            <Form>
                <Item>
                    <Input placeholder="Username" />
                </Item>
                <Item last>
                    <Input placeholder="Password" />
                </Item>
                <Button style={{margin:10}} onPress={() => {onSignIn(); console.log('here'); navigation.navigate("SignedIn")}} block rounded success><Text> Login</Text></Button>
            </Form>
        </Content>
    </Container>
);
