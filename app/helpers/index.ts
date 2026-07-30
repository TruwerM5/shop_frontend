export type Validate = { 
    success: true;
    errorMessage: null; 
} | { 
    success: false; 
    errorMessage: string 
};

export type ValidateSchema<T> = {
    field: keyof T;
    validators: Validate[];
}[];

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

export const minLength = (fieldName: string, value: string, length: number): Validate => {
    if(value.trim().length < length) {
        return {success: false, errorMessage: `${fieldName} should be not less or equal than ${length}`};
    }

    return  {success: true, errorMessage: null };
}

export const required = (value: string, message = 'Field is required'): Validate => {
    if(!value.trim()) {
        return { success: false, errorMessage: message};
    }

    return {success: true, errorMessage: null};
}

export const email = (value: string, message = 'Email should be valid'): Validate => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(value.trim())) {
        return { success: false, errorMessage: message };
    }
    return { success: true, errorMessage: null };
}

export const equals = (
    value: string,
    referenceValue: string,
    message = 'Fields are not equal'
): Validate => {
    const isSuccess = value === referenceValue;
    if(!isSuccess) {
        return { success: false, errorMessage: message };
    }
    return { success: true, errorMessage: null };
    
}