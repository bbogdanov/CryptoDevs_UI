import React, { Component } from 'react';
import View from 'react-native';
import { Container, Label, Form, Item, Content, Button, Input, Text, Thumbnail } from 'native-base';
import { onSignOut } from "../services/Auth";
export default class Profile extends Component {
    
    render() {
        return (
            <Container>
                <Content>
                    <Thumbnail large source={{uri: 'img/user.png'}} />
                    <Text style={styles.text}>Username: emakkaa@gmail.com</Text>
                    <Text style={styles.text}>Email: emakkaa@gmail.com</Text>
                    <Button style={{margin:10}}  onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))} block rounded success><Text> Logout</Text></Button>
                </Content>
            </Container>
        )
    }
}

const styles = {
    text: {
        paddingTop: 25,
        paddingBottom: 25,
        textAlign: 'center'
    }
}
