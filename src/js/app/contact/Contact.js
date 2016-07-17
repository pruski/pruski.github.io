import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HorizontalLoader, ErrorMessage} from 'infrastructure';
import ContactForm from './contactForm';
import SuccessMessage from './successMessage';
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
                return (
                    <ErrorMessage>
                        Please try <a href="https://uk.linkedin.com/in/konradpruski">the other way</a>.
                    </ErrorMessage>
                );
            
            case constants.SHOW_LOADER:
                return <HorizontalLoader />;
        }
    }
}

export default Contact