import ReactGA from 'react-ga';
import {fetchJson} from 'utils';
import {address} from './constants';
import * as actionTypes from './actionTypes';

export const reset = () => ({
    type: actionTypes.RESET
});

export const messageSent = () => ({
    type: actionTypes.SUCCESS
});

export const error = () => ({
    type: actionTypes.ERROR
});

export const sendMessage = (formData) => (dispatch) => {
    ReactGA.event({
        category: 'Contact',
        action: 'Submitting form'
    });

    fetchJson('https://formspree.io/' + address.split("").reverse().join(""), {
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
        () => {
            ReactGA.event({
                category: 'Contact',
                action: 'Message sent'
            });

            dispatch(messageSent())
        },
        (e) => {
            ReactGA.event({
                category: 'Contact',
                action: 'Message failed',
                label: e.toString()
            });

            dispatch(error())
        }
    );
};
