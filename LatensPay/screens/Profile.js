import React, { Component } from 'react';
import View from 'react-native';
import { Container, Label, Form, Item, Content, Button, Input, Text } from 'native-base';
import { onSignOut } from "../services/Auth";
export default ({ navigation }) => (
    <Container>
        <Content>
            <Text>Log Out</Text>
                <Button style={{margin:10}}  onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))} block rounded success><Text> Logout</Text></Button>
        </Content>
    </Container>
);
