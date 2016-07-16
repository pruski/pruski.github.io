import React, {Component} from 'react';
import debounce from 'debounce';

class FormField extends Component {
    constructor() {
        super();

        this.handleChange = debounce(this.handleChange, 300);
    }

    handleChange(value) {
        this.props.onUpdate(value);
    }

    render() {
        const {config: {InputType, placeholder, autofocus}} = this.props;

        return <InputType placeholder={placeholder}
                          autoFocus={autofocus}
                          onChange={(event) => this.handleChange(event.target.value)}/>;
    }
}

export default FormField;