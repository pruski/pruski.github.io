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
        
        this.props.onSubmit(this.props.values);
    }
    
    render() {
        const {sendable, onUpdateField} = this.props;

        return (
            <div className="contact-form">
                <h3>Let's do something great together.</h3>

                <form onSubmit={(e) => this.submit(e)}>
                    { constants.formConfig.map(field => (
                        <FormField key={field.id}
                                   config={field}
                                   onUpdate={(value) => onUpdateField(field.id, value)}/>
                    ))}
                    <button disabled={!sendable}>{ sendable ? 'Send' : 'All fields are required' }</button>
                </form>
            </div>
        );
    }
}
    

export default ContactForm;