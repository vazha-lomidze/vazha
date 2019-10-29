function minLengthEror(value, params) {
    const {
        minLength = 8,
        message = 'error in lenght validation'
    } = params;

    if (value && value.lenght < minLength) {
        return message;


    }
    return null;

}
export {
    minLengthEror

}