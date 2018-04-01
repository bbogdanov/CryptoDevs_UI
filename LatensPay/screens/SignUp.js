import React, {Component} from 'react';
import {Button, Container, Content, Form, Input, Item, Text} from 'native-base';
import {postCall} from '../services/Http';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        }
    }

    handleUsername(username) {
        this.setState({username});
    }

    handlePassword(password) {
        this.setState({password});
    }

    handleEmail(email) {
        this.setState({email});
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input onChangeText={this.handleUsername.bind(this)} placeholder="Username"/>
                        </Item>
                        <Item>
                            <Input secureTextEntry={true} onChangeText={this.handlePassword.bind(this)}
                                   placeholder="Password"/>
                        </Item>
                        <Item>
                            <Input onChangeText={this.handleEmail.bind(this)} placeholder="Email"/>
                        </Item>
                        <Button style={{margin: 10}} onPress={() => {
                            postCall('users/create', {
                                'user': {
                                    'username': this.state.username,
                                    'password': this.state.password,
                                    'email': this.state.email
                                }
                            })
                                .then(data => {
                                    console.log(data.status)
                                })
                                .catch(reason => console.log(reason.message));
                            this.props.navigation.navigate("SignIn");
                        }}
                                primary rounded block>
                            <Text> Sign Up</Text></Button>
                        <Button style={{margin: 10}} onPress={() => {
                            this.props.navigation.navigate("SignIn")
                        }} success rounded block><Text> Sign In</Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }

}