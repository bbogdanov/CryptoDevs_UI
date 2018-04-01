import React, {Component} from 'react';
import { StyleSheet, Modal } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text, Picker } from 'native-base';
import { validateEmail, validateAmount} from './../helper/Validator';
import { postTransaction } from './../services/Api';

export default class Send extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            type: "ETH",
            email: '',
            ammount: 0,
            modalVisible: true,
            errors: [],
            success: false
        };
        this.submit = this.submit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateAmount = this.validateAmount.bind(this);
        this.addError = this.addError.bind(this);
    };

    validateEmail() {
        error = validateEmail(this.state.email);
        if (error) {
            this.addError(error);
        }
    };

    validateAmount() {
        error = validateAmount(this.state.amount);
        if (error) {
            this.addError(error);
        }
    };

    addError(message) {
        let errors = this.state.errors;
        errors.push(message);
        this.setState({ errors: errors });
    };

    onChangeEmail(email) {
        this.setState({ email: email });
    };

    onChangeAmount(amount) {
        this.setState({ amount: amount });
    };

    onTypeChange(type) {
        this.setState({ type: type });
    }

    submit() {
        this.setState({ 
            errors: this.state.errors.splice(0, this.state.errors.length),
            success: false
        }, () => {
            //this.validateEmail();
            this.validateAmount();
            if(!this.state.errors.length) {
                let body = this.buildRequestBody()
                postTransaction(body)
                    .then((err, response) => {
                        if(err) {
                            console.log(err)
                            alert('error')
                            
                            this.addError(err.msg);
                        } else {
                            alert('success')
                            this.setState({ success: true })
                        }
                    });
            }
            });
    };

    buildRequestBody() {
        return {
            email: this.state.email,
            currency_code: this.state.type,
            amount: this.state.amount
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Transfer
                        </Title>
                    </Body>
                </Header>
                <Content>
                    {
                        this.state.errors.map((e, index) => {
                            return (
                                <Text key={index} style={styles.error}>{e}</Text>
                            )
                        })
                    }
                    {
                        this.state.success ? <Text style={styles.success}>Transfer was successfull</Text> : <Text></Text>
                    }
                    <Form style={styles.form}>
                        <Item last>
                            <Input style={styles.input}
                                onChangeText={this.onChangeEmail.bind(this)}
                                placeholder="User email" />
                        </Item>
                        <Item last>
                            <Input style={styles.input}
                                onChangeText={this.onChangeAmount.bind(this)}
                                placeholder="Amount" />
                        </Item>
                        <Picker
                            style={styles.picker}
                            iosHeader="Currency"
                            mode="dropdown"
                            placeholder="Select currency"
                            selectedValue={this.state.type}
                            onValueChange={this.onTypeChange.bind(this)}
                            >
                            <Item label="BTC" value="BTC" />
                            <Item label="ETH" value="ETH" />
                        </Picker>
                        <Button onPress={this.submit}
                            style={styles.submit_button}
                            rounded
                            block
                            primary>
                            <Text style={{ color: 'white' }}> Send to user </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        marginTop: 50
    },
    input: {
        marginTop: 20
    },
    picker: {
        marginTop: 10,
        marginLeft:15
    },
    submit_button: {
        margin: 10
    },
    error_container: {
        paddingBottom: 20
    },
    error: {
        backgroundColor: "#EFDFDF",
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    success: {
        backgroundColor: "#D9ECDC",
        padding: 10,
        margin: 10,
        borderRadius: 10
    }
});