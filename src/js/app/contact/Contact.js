import React from 'react';
import ContactForm from './contactForm/ContactForm';

export default ({ sent }) => {
    if (sent) {
        return (
            <div className="message-sent">
                Your message has been sent
                <div className="fa fa-paper-plane-o"></div>
                Thank you
            </div>
        )
    }

    return <ContactForm />
};