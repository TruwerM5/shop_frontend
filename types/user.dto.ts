export interface UserDto {
    userId: number;
    email: string;
    name: string;
    status: typeof UserStatus;
    role: typeof Role;
}

export const UserStatus = {
    active: 'active',
    blocked: 'blocked'
} as const;

export const Role = {
    user: 'user',
    seller: 'seller',
    admin: 'admin'
} as const;