import React, {Component} from 'react';
import {connect} from 'react-redux';
import map from 'object.map';
import FormField from './formField';
import * as actions from './actions';
import formConfig from './formConfig';

@connect(state => {
    return state.contact.contactForm
}, actions)
class ContactForm extends Component {
    componentWillUnmount() {
        this.props.resetFields();
    }

    submit(event) {
        event.preventDefault();
        
        this.props.onSubmit(map(this.props.fields, field => field.value));
    }
    
    render() {
        const {valid, fields, onUpdateField} = this.props;

        return (
            <div className="contact-form">
                <h3>Let's do something great together.</h3>

                <form onSubmit={(e) => this.submit(e)}>
                    { formConfig.map(field => (
                        <FormField key={field.id}
                                   config={field}
                                   valid={fields[field.id].valid}
                                   onUpdate={(value) => onUpdateField(field.id, value)}/>
                    ))}
                    <div className="form-field"><button disabled={!valid}>{ valid ? 'Send' : 'All fields are required' }</button></div>
                </form>
            </div>
        );
    }
}
    

export default ContactForm;