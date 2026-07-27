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

export interface UserStore {
    isAuthenticated: boolean;
    user: ApiUserPayload;
    checkIfAuthenticated: () => Promise<void>;
}