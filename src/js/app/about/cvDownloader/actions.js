import ReactGA from 'react-ga';
import * as actionTypes from './actionTypes';

export const onDownload = () => {
    ReactGA.event({
        category: 'About',
        action: 'CV Download'
    });

    return {
        type: actionTypes.DOWNLOAD_CLICKED
    };
};

export const onExit = () => ({
    type: actionTypes.ON_EXIT
});