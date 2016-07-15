import * as actionTypes from './actionTypes';

const initialState = [
    {
        url: 'about',
        label: 'about',
        active: true
    },
    {
        url: 'code',
        label: 'code',
        active: false
    },
    {
        url: 'contact',
        label: 'contact',
        active: false
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAVIGATE:
            return state.map( item => ({
                ...item,
                active: item.url === action.url
            }));

        default:
            return state;
    }
};