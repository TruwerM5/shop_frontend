import type { SignUpUserDto } from '../../types/user';
import { minLength, required, email, equals } from './index';
import type { ValidateSchema } from './index';
interface SuccessValidate {
    success: true;
}

interface ErrorValidate<T> {
    success: false;
    errors: {
        field: keyof T;
        message: string;
    }[];
}

export type ValidateSignUpData = SuccessValidate | ErrorValidate<SignUpUserDto>;


const validate = <T>(fields: ValidateSchema<T>) => {
    const validationResults: { field: keyof T, errorMessage: string | null }[] = [];
    let success = false;
    for(const validationField of fields) {
        let errorMessage: string | null = null;
        const hasError = validationField.validators.find(validator => !validator.success);
        if(hasError) {
            success = false;
            errorMessage = hasError.errorMessage;
            validationResults.push({
                field: validationField.field,
                errorMessage,
            });
            return { success, validationResults };
        } else {
            success = true;
            errorMessage = null;
        }
        validationResults.push({
            field: validationField.field,
            errorMessage,
        });
    }    
    return { success, validationResults };
}

export const validateSignUpData = <T>(data: SignUpUserDto) => {
    const signUpValidationFields: ValidateSchema<SignUpUserDto> = [
        {
            field: 'name',
            validators: [
                required(data.name, 'Name is required'),
                minLength('name', data.name, 2),
            ],
        },
        {
            field: 'email',
            validators: [
                required(data.email, 'Email is required'),
                email(data.email, 'Email should be valid'),
            ],
        },
        {
            field: 'password',
            validators: [
                required(data.password, 'Password is required'),
                minLength('password', data.password, 6),
            ],
        },
        {
            field: 'confirmPassword',
            validators: [
                equals(data.confirmPassword, data.password, `Passwords must be equal`),
            ],
        },
    ];

    return validate<SignUpUserDto>(signUpValidationFields);

}