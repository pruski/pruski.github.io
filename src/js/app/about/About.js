import React, {Component} from 'react';
import {connect} from 'react-redux';
import CvDownloader from './cvDownloader';
import CvLoader from './cvLoader';
import CvLink from './cvDownloader/cvLink';
import { documentId } from './constants';
import * as actions from './actions';

@connect(state => state.about.about, actions)
class About extends Component {
    componentWillUnmount() {
        this.props.resetState();
    }
    
    render() {
        const {frameLoaded, onFrameLoad} = this.props;
        
        return (
            <div className="about">
                <h3>Hello. My name is Konrad. I'm a javascript developer.</h3>

                <div className="resume-link">
                    <CvLink documentId={documentId}>Read my resume</CvLink>
                </div>

                <div className="cv-component">
                    { frameLoaded ? <CvDownloader documentId={documentId}/> : <CvLoader /> }

                    <iframe onLoad={() => onFrameLoad()}
                            src={`https://docs.google.com/viewer?url=https://docs.google.com/document/d/${documentId}/export?format=pdf&embedded=true`}
                            className={frameLoaded ? '' : 'hide-frame'}
                            frameBorder="0">
                    </iframe>
                </div>
            </div>
        )
    };
}

export default About;