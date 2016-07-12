import * as actionTypes from './actionTypes';

const initialState = [
    {
        url: 'about',
        label: 'About',
        active: true
    },
    {
        url: 'projects',
        label: 'Projects',
        active: false
    },
    {
        url: 'contact',
        label: 'Contact',
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