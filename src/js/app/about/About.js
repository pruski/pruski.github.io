import React, {Component} from 'react';
import {connect} from 'react-redux';
import { documentId } from './constants';
import CvDownloader from './cvDownloader/CvDownloader';
import * as actions from './actions';
import CvLoader from './cvLoader/CvLoader';

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
                
                { frameLoaded ? <CvDownloader documentId={documentId}/> : <CvLoader /> }

                <iframe onLoad={() => onFrameLoad()}
                        src={`https://docs.google.com/viewer?url=https://docs.google.com/document/d/${documentId}/export?format=pdf&embedded=true`}
                        className={frameLoaded ? '' : 'hide-frame'}
                        frameBorder="0">
                </iframe>
            </div>
        )
    };
}

export default About;