import { FORWARD_STATUS, FORWARD_ERROR } from '../actions/types';

const initialState = {
    forwardStatus: '',
    isWithAppellant: '',
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FORWARD_STATUS:
            return {
                ...state,
                forwardStatus: payload.forwardStatus,
                isWithAppellant: payload.isWithAppellant,
                loading: false,
            };

        case FORWARD_ERROR:
            return { ...state, error: payload, loading: false };

        default:
            return state;
    }
}
