import React, { Component } from 'react';
import { Container, Label, Form, Item, Content, Button, Input, Text } from 'native-base';


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
                <Item last>
                    <Input placeholder="Email" />
                </Item>
                <Button style={{margin:10}} onPress={() => navigation.navigate("SignUp")} primary rounded block><Text> Sign Up</Text></Button>
                <Button style={{margin:10}} onPress={() => navigation.navigate("SignIn")} success rounded block><Text> Sign In</Text></Button>
            </Form>
        </Content>
    </Container>
);