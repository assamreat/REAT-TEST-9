import { GET_PAYMENT, PAYMENT_ERROR } from '../actions/types';

export default function (state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PAYMENT:
            return { ...state, payment: payload };

        case PAYMENT_ERROR:
            return { ...state, error: payload };

        default:
            return state;
    }
}
