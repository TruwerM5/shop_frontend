export type ApiUserPayload = {
    userId: number;
    email: string;
    name: string;
    status: typeof UserStatus;
    role: UserRole;
} | { 
    userId: null;
};

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

type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

export interface UserStore {
    authStatus: AuthStatus;
    user: ApiUserPayload;
    setUser: (userData: ApiUserPayload) => void;
    checkIfAuthenticated: () => Promise<void>;
    signUp: (data: SignUpUserDto) => Promise<ApiUserPayload | boolean>;
    login: (data: LogInUserDto) => Promise<ApiUserPayload | boolean>;
    logout: () => Promise<void>;
}
