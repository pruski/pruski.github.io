import React from 'react';

export default ({address}) => (
    <div className="message-failed">
        <h3>
            <div className="fa fa-exclamation-triangle"></div>
            Ups... Something went wrong.
        </h3>
        <h4>Please try <a href="https://uk.linkedin.com/in/konradpruski">the other way</a>.</h4>
    </div>
);