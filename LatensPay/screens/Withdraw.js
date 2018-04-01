import React, {Component} from 'react';
import { StyleSheet, Modal } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Button, Text, Picker } from 'native-base';
import { validateAddress, validateAmount} from './../helper/Validator';
import { postWithdraw } from './../services/Api';

export default class Withdraw extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            amount: 0,
            type: "ETH",
            modalVisible: true,
            errors: [],
            success: false
        }
        this.submit = this.submit.bind(this);
        this.validateAddress = this.validateAddress.bind(this);
        this.validateAmount = this.validateAmount.bind(this);
        this.addError = this.addError.bind(this);
    };

    validateAddress() {
        error = validateAddress(this.state.address);
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

    onChangeAddress(address) {
        this.setState({ address: address });
    };

    onChangeAmount(amount) {
        this.setState({ amount: amount });
    };

    onTypeChange(type) {
        this.setState({ type: type });
    }

    submit() {
        this.setState({ 
            errors: [],
            success: false
        }, () => {
            this.validateAddress();
            this.validateAmount();
            if(!this.state.errors.length) {
                let body = this.buildRequestBody()
                postWithdraw(body)
                    .then((response) => {
                        if(response.status == 200) {
                            this.setState({ success: true })
                        } else {
                            this.addError(err.msg);
                        }
                    });
            }
            });
    };

    buildRequestBody() {
        return {
            address: this.state.address,
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
                            WithDraw
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
                        this.state.success ? <Text style={styles.success}>Withdraw was successfull</Text> : <Text></Text>
                    }
                    <Form style={styles.form}>
                        <Item>
                            <Input style={styles.input}
                                onChangeText={this.onChangeAddress.bind(this)}
                                placeholder="Address" />
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
                            <Text style={{ color: 'white' }}> Withdraw </Text>
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