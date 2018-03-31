import React, { Component } from 'react';
import { Container, Form, Item, Content, Button, Input, Text } from 'native-base';
import { postCall } from '../services/Http';
import { onSignIn } from "../services/Auth";


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        }
    }

    handlePassword(password) {
        this.setState({ password });
    }

    handleEmail(email) {
        this.setState({ email });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input onChangeText={this.handleEmail.bind(this)} placeholder="Email" />
                        </Item>
                        <Item>
                            <Input password onChangeText={this.handlePassword.bind(this)} placeholder="Password" />
                        </Item>
                        <Button style={{ margin: 10 }} onPress={() => {
                            postCall('user_token', {
                                'auth': { 'password': this.state.password, 'email': this.state.email }
                            })
                                .then(
                                    (data) => {
                                        onSignIn(data.jwt);
                                        this.props.navigation.navigate("SignedIn");
                                    })
                                .catch(reason => console.log(reason.message));
                        }}
                            primary rounded block>
                            <Text> Login</Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }

}
