import React from 'react';

export default ({documentId, children, customClassName, clickHandler}) => (
    <div className="download-links">
        <a href={`https://docs.google.com/document/export?format=pdf&id=${documentId}`}
           onClick={() => clickHandler()}
           className={"btn btn-link " + customClassName}>
            
            { children }
            
            <span className="fa fa-file-pdf-o"></span>
        </a>
    </div>
)
