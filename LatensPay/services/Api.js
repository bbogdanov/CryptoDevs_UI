import { postCall } from './Http';

const POST_TRANSACTION_URL = '/users/transfer';
const POST_WITHDRAWURL = '/users/withdraw';

export const postTransaction = (body) => {
    return postCall(POST_TRANSACTION_URL, body);
}

export const postWithdraw = (body) => {
    return postCall(POST_WITHDRAW_URL, body);
}