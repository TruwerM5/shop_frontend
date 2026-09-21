import type { UserResponse, SignupRequest, LoginRequest } from "@shop/contracts";

type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

export interface UserStore {
    authStatus: AuthStatus;
    isAuthInitialized: boolean;
    user: UserResponse | { userId: null };
    setUser: (userData: UserResponse) => void;
    setAuthInitialized: (value: boolean) => void;
    checkIfAuthenticated: () => Promise<void>;
    signUp: (data: SignupRequest) => Promise<UserResponse | boolean>;
    login: (data: LoginRequest) => Promise<UserResponse | boolean>;
    logout: () => Promise<void>;
    getUserCart: () => Promise<void>;
}
