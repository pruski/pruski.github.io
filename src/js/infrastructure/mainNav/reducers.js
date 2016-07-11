const initialState = [
    {
        url: 'about',
        label: 'About',
        active: true
    }, {
        url: 'projects',
        label: 'Projects',
        active: false
    }, {
        url: 'contact',
        label: 'Contact',
        active: false
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'NAVIGATE':
            return state.map( item => {
                return Object.assign({}, item, {
                    active: item.url === action.url ? true : false
                });
            });

        default:
            return state;
    }
};