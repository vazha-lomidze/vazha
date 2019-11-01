import React from 'react';
import * as Validations from '../lib/validation';
import * as Formaters from '../lib/formater';
class Input extends React.Component {
    state = {
        errors: []
    }
    handleChange(event) {
        const {
            onChange,
            inputValidations= [],
            formatterValidations = []
        } = this.props;
        let tempErrors = [];
        let formatterError = false;
        


            if (inputValidations.length) {
                inputValidations.forEach(item => {
                    let error = Validations[item.name](event.target.value, item.params);

                    if (error) {
                        tempErrors.push(error);

                    }

                });
            }
            if (formatterValidations.length) {
                formatterValidations.forEach(item => {
                    let error = Formaters[item.name](event.target.value);
                    console.log(error)
                    if(error){
                        formatterError=true;
                    }
                });
            }
            if (formatterError){
                return false;
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
