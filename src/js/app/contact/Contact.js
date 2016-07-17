import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HorizontalLoader} from 'infrastructure';
import ContactForm from './contactForm/ContactForm';
import SuccessMessage from './successMessage/SuccessMessage';
import ErrorMessage from './errorMessage/ErrorMessage';
import * as actions from './actions';
import * as constants from './constants';

@connect(state => ({display: state.contact.contact}), actions)
class Contact extends Component {
    componentWillUnmount() {
        this.props.reset();
    }
    
    render() {
        switch (this.props.display) {
            case constants.SHOW_FORM: 
                return <ContactForm onSubmit={(data) => this.props.sendMessage(data)}/>;
                
            case constants.SHOW_SUCCESS_MESSAGE:
                return <SuccessMessage />;
            
            case constants.SHOW_ERROR_MESSAGE:
                return <ErrorMessage address={constants.address} />;
            
            case constants.SHOW_LOADER:
                return <HorizontalLoader />;
        }
    }
}

export default Contact