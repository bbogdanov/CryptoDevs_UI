import React, { Component } from 'react';
import { Container, Content, Button, Text, Thumbnail, Grid } from 'native-base';
import { onSignOut } from "../services/Auth";
import { getUserData } from './../services/Api';
import test from './../img/user.png';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            last_login: ''
        }
        this.loadData();
    }

    loadData = () => {
        getUserData()
            .then(response => {
                this.setState({
                    email: response.email,
                    last_login: response.last_login
                });
            });
    }

    render() {

        return (
            <Container>
                <Content>
                    <Grid style={styles.container}>
                        <Thumbnail style={styles.image} large source={test} />
                    </Grid>
                    <Text style={styles.text}>Username: emakkaa</Text>
                    <Text style={styles.text}>Email: {this.state.email}</Text>
                    <Text style={styles.text}>Last login: {this.state.last_login}</Text>
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
        textAlign: 'center',

    },
    container: {
        paddingTop:50
    },
    image: {
        marginLeft: 110,
        width: 150,
        height: 150,
        alignSelf: 'center'
    }
}
