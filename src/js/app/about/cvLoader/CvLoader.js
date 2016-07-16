import React from 'react';
import HorizontalLoader from '../../../infrastructure/horizontalLoader/HorizontalLoader';

export default () => (
    <div>
        <span className="loader-info">My CV is loading below.</span>
        <HorizontalLoader />
    </div>
)