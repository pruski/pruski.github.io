import React, {Component} from 'react';
import debounce from 'debounce';

class FormField extends Component {
    constructor() {
        super();

        this.dirty = false;
        this.handleChange = debounce(this.handleChange, 300);
    }

    handleChange(value) {
        this.props.onUpdate(value);
    }

    handleBlur() {
        this.dirty = true;
        this.forceUpdate();
    }

    render() {
        const {
            valid,
            config: {
                InputType,
                placeholder,
                autofocus,
                validation: {
                    errorMessage
                }
            }
        } = this.props;

        return (
            <div className={!valid && this.dirty ? 'form-field error' : 'form-field'}>
                <label>{errorMessage}</label>
                <InputType placeholder={placeholder}
                           autoFocus={autofocus}
                           onChange={(event) => this.handleChange(event.target.value)}
                           onBlur={() => this.handleBlur()}
                           className={!valid && this.dirty ? 'error' : ''}/>
            </div>
        );
    }
}

export default FormField;