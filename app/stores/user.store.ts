import { create } from "zustand";
import { getUserPayload, signUpUser, loginUser, logoutUser } from "~/api/auth.api";
import type { UserStore } from "../../types/user";

export const useUserStore = create<UserStore>((set) => ({
    isAuthenticated: false,
    user: null,
    checkIfAuthenticated: async () => {
        try {
            const { data } = await getUserPayload();
            if(!data) {
                throw new Error("Error getting user");
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
        const { data: responseData } = await signUpUser(data);
        if(responseData?.userId) {
            set({
                isAuthenticated: true,
                user: responseData,
            });
        }
        return responseData;

    },
    login: async (data) => {
        const { data: responseData } = await loginUser(data);
        if(responseData?.userId) {
            set({
                isAuthenticated: true,
                user: responseData,
            });
        }
        return responseData;
    },
    logout: async () => {
        try {
            const { data } = await logoutUser();
            if(!data.success) {
                throw new Error("Logout Error");
            }
            set({
                isAuthenticated: false,
                user: null,
            })
        } catch {

        }
    },
}));