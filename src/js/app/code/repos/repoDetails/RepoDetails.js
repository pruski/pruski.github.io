import React from 'react';
import marked from 'marked';

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
    let content;

    if(details) {
        content = <div className="markdown-body" dangerouslySetInnerHTML={{__html: marked(details.readme)}}></div>
    }
    else {
        content = <div>Please select a project</div>
    }

    return (
        <div className="repo-details">
            <div className="panel panel-default">
                <div className="panel-heading clearfix">
                    <span className="panel-title pull-left">
                        <a href={details.url}>
                            <span className="octicon octicon-mark-github"></span>
                            view source
                        </a>
                    </span>
                    {!details.parent ? '' : (
                        <span className="panel-title pull-right">
                            forked from <a href={details.parent.url}>
                                <span className="octicon octicon-repo-forked"></span>
                                {details.parent.name}
                            </a>
                        </span>
                    )}
                </div>
                <div className="panel-body">
                    {content}
                </div>
            </div>
        </div>
    );
}