import React from 'react';
import marked from 'marked';
import {formatDuration} from 'utils';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

export default ({details}) => {
    if(!details) {
        return (
            <div className="repo-details message">
                <h3>A small selection of sample code and utilities.</h3>
                <h4>Please select a project to view it's readme.</h4>
            </div>
        );
    }

    return (
        <div className="repo-details">
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <span className="panel-title pull-left">
                        <a href={details.url} className="github-link">
                            <span className="octicon octicon-mark-github"></span>
                            {details.id}
                        </a>
                        {' '}
                        updated {formatDuration(details.updated)} ago
                    </span>

                    {!details.parent ? '' : (
                        <span className="fork-source panel-title pull-right">
                            forked from <a href={details.parent.url}>
                                <span className="octicon octicon-repo-forked"></span>
                                {details.parent.name}
                            </a>
                        </span>
                    )}
                </div>
                <div className="panel-body markdown-body" dangerouslySetInnerHTML={{__html: marked(details.readme)}}></div>
            </div>
        </div>
    );
}