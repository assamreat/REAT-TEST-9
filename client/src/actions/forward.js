import axios from 'axios';
import { FORWARD_STATUS, FORWARD_ERROR } from './types';

export const revertCheck = (appealId) => async (dispatch) => {
    try {
        const res = await axios.get(
            `/api/appellant/appeals/${appealId}/revertcheck`
        );

        dispatch({
            type: FORWARD_STATUS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: FORWARD_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
