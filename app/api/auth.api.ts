import api from ".";
import type { ApiUserPayload, LogInUserDto, SignUpUserDto, LogoutUserDto } from '../../types/user';

export const getUserPayload = async () => {
    return api.get<ApiUserPayload>('/auth');
}

export const signUpUser = async (data: SignUpUserDto) => {
    return api.post<ApiUserPayload>('/auth/signup', data);
}

export const loginUser = async (data: LogInUserDto) => {
    return api.post<ApiUserPayload>('/auth/login', data);
}

export const logoutUser = async () => {
    return api.post<LogoutUserDto>('/auth/logout');
}