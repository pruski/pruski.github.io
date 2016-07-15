import {address} from './constants';
import * as actionsTypes from './actionTypes';

export const reset = () => ({
    type: actionsTypes.RESET
});

export const messageSent = () => ({
    type: actionsTypes.SUCCESS
});

export const error = () => ({
    type: actionsTypes.ERROR
});

export const sendMessage = (formData) => (dispatch) => {
    dispatch({type: actionsTypes.SENDING});

    fetch('https://formspree.io/' + address.split("").reverse().join(""), {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _subject: 'github.io contact form',
            email: formData.email,
            message: "name: " + formData.name + ", message: " + formData.message
        })
    }).then(
        response => {
            if (response.status >= 200 && response.status < 300) {
                dispatch(messageSent());

            } else {
                dispatch(error());
            }
        },
        error => dispatch(error())
    );
};
