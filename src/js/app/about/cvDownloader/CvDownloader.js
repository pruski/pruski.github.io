import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';

@connect(state => ({...state.about.cvDownloader}), actions)
class CvDownloader extends Component {
    componentWillUnmount() {
        this.props.onExit();
    }

    render() {
        const { documentId, renderMessage, onDownload } = this.props;

        if (renderMessage) {
            return (
                <div className="download-links">
                    <Link className="btn btn-link" to="/contact">
                        I'm looking forward to hearing from you
                        <span className="fa fa-envelope-o"></span>
                    </Link>
                    
                    <div>
                        <a className="btn btn-link btn-sm"
                           href={`https://docs.google.com/document/export?format=pdf&id=${documentId}`}>
                            <span>download again</span>
                        </a>
                    </div>
                </div>
            );

        }
        return (
            <div className="download-links">
                <a className="btn btn-link"
                   href={`https://docs.google.com/document/export?format=pdf&id=${documentId}`}
                   onClick={ () => onDownload() }>
                    Get a copy
                    <span className="fa fa-file-pdf-o"></span>
                </a>
            </div>
        );

    }
}


export default CvDownloader;