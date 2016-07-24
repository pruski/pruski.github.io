import React from 'react';
import {HorizontalLoader} from 'infrastructure';

export default () => (
    <div>
        <span className="loader-info">My resume is loading below.</span>
        <HorizontalLoader />
    </div>
)