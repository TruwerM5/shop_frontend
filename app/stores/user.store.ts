import { create } from 'zustand';
import { getUserPayload, signUpUser, loginUser, logoutUser } from '~/api/auth.api';
import type { UserStore } from '../../types/user';
import { redirect } from 'react-router';

export const useUserStore = create<UserStore>((set) => ({
    isAuthenticated: false,
    user: null,
    checkIfAuthenticated: async () => {
        try {
            const { data } = await getUserPayload();
            if(!data) {
                throw new Error('Error getting user');
            }
            set({
                isAuthenticated: true,
                user: data,
            });
            
        } catch {
            set({
                isAuthenticated: false,
                user: null,
            });
        }
    },
    signUp: async (data) => {
        try {
            const { data: responseData } = await signUpUser(data);
            if(!data) {
                throw new Error('Sign Up Error');
            }
            // set({
            //     isAuthenticated: true,
            //     user: responseData,
            // });
        } catch {

        }
    },
    login: async (data) => {
        try {
            const { data: responseData } = await loginUser(data);
            if(!data) {
                throw new Error('Login Error');
            }
            set({
                isAuthenticated: true,
                user: responseData,
            });
        } catch {

        }
    },
    logout: async () => {
        try {
            const { data } = await logoutUser();
            if(!data.success) {
                throw new Error('Logout Error');
            }
            set({
                isAuthenticated: false,
                user: null,
            })
        } catch {

        }
    },
}));