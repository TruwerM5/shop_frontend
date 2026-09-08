import api from ".";
import type { UserResponse, LoginRequest, SignupRequest, LogoutRequest } from "@shop/contracts";

export const getUserPayload = async () => {
    return api.get<UserResponse>('/auth');
}

export const signUpUser = async (data: SignupRequest) => {
    return api.post<UserResponse>('/auth/signup', data);
}

export const loginUser = async (data: LoginRequest) => {
    return api.post<UserResponse>('/auth/login', data);
}

export const logoutUser = async () => {
    return api.post<LogoutRequest>('/auth/logout');
}