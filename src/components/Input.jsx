import React from 'react';
import * as Validations from '../lib/validation';

class Input extends React.Component {
    state = {
        errors: []
    }
    handleChange(event) {
        const {
            onChange,
            inputValidations= []
        } = this.props;
        let tempErrors = []
        if (tempErrors.length) {


            if (inputValidations.length) {
                inputValidations.forEach(item => {
                    let error = Validations[item.name](event.target.value, item.params);

                    if (error) {
                        tempErrors.push(error);

                    }

                });
            }
            if (tempErrors.length) {
                this.setState({

                    errors: tempErrors
                })
            }
            else {
                this.setState({
                    errors: []
                })
            }
        }

        onChange(event);
    }

    render() {
        const {
            name,
            value,
            type = 'text'
        } = this.props;
console.log(this.state.errors)
        return (
            <input
                name={name}
                onChange={(event) => this.handleChange(event)}
                value={value}
                type={type} />

        )
    }
}

export default Input;
