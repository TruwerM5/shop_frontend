export const minLength = (value: string, length: number, fieldName: string) => {
    if(value.length < length) {
        throw new Error(`${fieldName} must be longer than on equal to ${length} characters`);
    }
    return true;
}

export const required = (value: string, message = 'Field is required') => {
    if(!value) {
        throw new Error(message);
    }
    return true;
}