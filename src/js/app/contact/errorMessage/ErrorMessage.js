import React from 'react';

export default ({address}) => (
    <div className="message-failed">
        <h4>
            <div className="fa fa-exclamation-triangle"></div>
            Ups... Something went wrong.
        </h4>
        <h5>Please try <a href="https://uk.linkedin.com/in/konradpruski">the other way</a>.</h5>
    </div>
);