import { postCall, getCall } from './Http';

const POST_TRANSACTION_URL = 'users/transfer';
const POST_WITHDRAW_URL = 'users/withdraw';

const GET_USER = 'users/current';
const GET_USER_DEPOSIT = 'users/deposit';

export const postTransaction = (body) => {
    return postCall(POST_TRANSACTION_URL, body);
}

export const postWithdraw = (body) => {
    return postCall(POST_WITHDRAW_URL, body);
}

export const getUserData = () => {
    return getCall(GET_USER);
}

export const getUserDeposit = () => {
    return getCall(GET_USER_DEPOSIT);
}