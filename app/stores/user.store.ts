import { create } from 'zustand';
import { getUserPayload } from '~/api/auth.api';

export const useUserStore = create((set) => ({
    isAuthenticated: false,
    checkIsAuthenticated: async () => {
        try {
            const request = await getUserPayload();
            console.log(request.data);
            set({isAuthenticated: Boolean(request.data?.userId)});
        } catch {
            console.error('Error getting user');
        }
    },
        
    
}));