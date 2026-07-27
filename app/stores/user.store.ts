import { create } from 'zustand';
import { getUserPayload } from '~/api/auth.api';
import type { UserStore } from '../../types/user';

export const useUserStore = create<UserStore>((set) => ({
    isAuthenticated: false,
    user: null,
    checkIfAuthenticated: async () => {
        try {
            const { data } = await getUserPayload();
            if(!data) {
                throw new Error('Error getting user');
            }
            if(data.userId) {
                set({
                    isAuthenticated: true,
                    user: data,
                });
            }
            
        } catch {
            console.error('Error getting user');
        }
    },
}));