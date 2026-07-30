export type ApiUserPayload = {
    userId: number;
    email: string;
    name: string;
    status: typeof UserStatus;
    role: UserRole;
} | null;

export const UserStatus = {
    active: 'active',
    blocked: 'blocked'
} as const;

export enum UserRole {
    user = 'user',
    seller = 'seller',
    admin = 'admin'
}

export interface LogInUserDto {
    email: string;
    password: string;
}
export interface SignUpUserDto extends LogInUserDto {
    name: string;
    confirmPassword: string;
}

export interface LogoutUserDto {
    success: boolean;
}
export interface UserStore {
    isAuthenticated: boolean;
    user: ApiUserPayload;
    checkIfAuthenticated: () => Promise<void>;
    signUp: (data: SignUpUserDto) => Promise<ApiUserPayload | boolean>;
    login: (data: LogInUserDto) => Promise<ApiUserPayload | boolean>;
    logout: () => Promise<void>;
}
