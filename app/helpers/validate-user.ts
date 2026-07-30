import type { SignUpUserDto } from '../../types/user';
import { minLength, required } from './index';

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

type ValidateSchema<T> = {
    field: keyof T;
    validators: boolean[]
}[];

const validate = (fields: ValidateSchema<any>) => {
    const success = fields.every(field => field.validators.every(validator => !!validator));
    return { success };
}

export const validateSignUpData = (data: SignUpUserDto) => {
    const signUpValidationFields: ValidateSchema<SignUpUserDto> = [
        {
            field: 'name',
            validators: [required('name', data.name, 'Name is required')],
        }
    ];

    return validate(signUpValidationFields);

}