import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormField from './formField/FormField';
import * as actions from './actions';
import * as constants from './constants';

@connect(state => state.contact.contactForm, actions)
class ContactForm extends Component {
    componentWillUnmount() {
        this.props.resetFields();
    }

    submit(event) {
        event.preventDefault();
    }
    
    render() {
        const {onUpdateField, sendable, values} = this.props;
        
        return (
            <form onSubmit={(e) => this.submit(e)} className="contact-form">
                { constants.formConfig.map(field => (
                    <FormField key={field.id}
                               config={field}
                               value={values[field.id]}
                               onUpdate={(value) => onUpdateField(field.id, value)}/>
                ))}
                <button disabled={!sendable}>{ sendable ? 'Send' : 'All fields are required' }</button>
            </form>
        );
    }
}
    

export default ContactForm;