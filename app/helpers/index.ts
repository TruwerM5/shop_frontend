export class ValidationError extends Error {

    constructor(
        public fieldName: string,
        message = 'Field is required',
        public options: {
            fieldName: string;
            statusCode?: number;
        }
    ) {
        super(message);
        this.name = 'ValidationError';
        
    }
}

export const minLength = (value: string, length: number, fieldName: string) => {
    if(value.length < length) {
        throw new Error(`${fieldName} must be longer than on equal to ${length} characters`);
    }
    return true;
}

export const required = (fieldName: string, value: string, message = 'Field is required',) => {
    if(!value) {
        throw new ValidationError(fieldName, message, {
            fieldName,
            statusCode: 400,
        });
    }
    return true;
}