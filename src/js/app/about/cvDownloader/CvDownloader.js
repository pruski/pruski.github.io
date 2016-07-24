import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import CvLink from './cvLink';
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
                    
                    <CvLink documentId={documentId} css="btn-sm">download again</CvLink>
                </div>
            );

        }
        return <CvLink documentId={documentId} clickHandler={() => onDownload()}>Get a copy</CvLink>;

    }
}


export default CvDownloader;