import React from 'react';
import { documentId } from './constants';
import CvDownloader from './cvDownloader/CvDownloader';

export default () => (
    <div>
        <CvDownloader documentId={documentId} />
        <iframe className="cv" frameBorder="0" src={`https://docs.google.com/viewer?url=https://docs.google.com/document/d/${documentId}/export?format=pdf&embedded=true`}></iframe>
    </div>
);