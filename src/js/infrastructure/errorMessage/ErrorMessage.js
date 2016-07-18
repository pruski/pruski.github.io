import React from 'react';

export default ({children}) => (
    <div className="error-message">
        <h3>
            <div className="fa fa-exclamation-triangle"></div>
            Ups... Something went wrong.
        </h3>
        
        <h4>{children}</h4>
    </div>
);