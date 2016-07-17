import React from 'react';

export default ({onRetryClick}) => (
    <div className="message-failed">
        <h3>
            <div className="fa fa-exclamation-triangle"></div>
            Ups... Something went wrong.
        </h3>
        <h4>Please <button onClick={() => onRetryClick()} className="btn btn-link btn-inline">try again</button>.</h4>
    </div>
);