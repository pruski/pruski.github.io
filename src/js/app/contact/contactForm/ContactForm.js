import React from 'react';
import { connect } from 'react-redux';
import FormField from './formField/FormField';
import * as actions from './actions';
import * as constants from './constants';

const ContactForm = ({ onUpdateField, sendable }) => (
    <form className="contact-form">
        { constants.formConfig.map( field => (
            <FormField key={field.id} config={field} onUpdate={ (value) => onUpdateField(field.id, value) } />
        ))}
        <button disabled={!sendable}>{ sendable ? 'Send' : 'All fields are required' }</button>
    </form>
);

export default connect(state => state.contact.contactForm, actions)(ContactForm);