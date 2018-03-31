import React, { Component } from 'react';

const MIN_AMOUNT = 0;
const MIN_ACCOUNT_LENGTH = 26;
const MAX_ACCOUNT_LENGTH = 35;

export const validateEmail = (email) => {
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!email) {
        return "Missing email."
    }
    else if(!re.test(String(email).toLowerCase())) {
        return "Invalid email."
    }
}

export const validateAmount = (amount) => {
    if (!amount) {
        return "Missing ammount.";
    }
    else if(isNaN(amount) ||
        amount < MIN_AMOUNT) {
        alert(amount);
        return "Invalid ammount.";
    }
}

export const validateAddress = (address) => {
    if (!address) {
        return "Missing address.";
    }
    else if(address.length < MIN_ACCOUNT_LENGTH ||
        address.length > MAX_ACCOUNT_LENNGTH) {
        return "Invalid address.";
    }
}