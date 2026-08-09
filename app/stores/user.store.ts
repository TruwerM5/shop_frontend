import { create } from "zustand";
import { getUserPayload, signUpUser, loginUser, logoutUser } from "~/api/auth.api";
import type { ApiUserPayload, UserStore } from "../../types/user";

export const useUserStore = create<UserStore>((set) => ({
    authStatus: "idle",
    user: { userId: null },
    setUser: (userData: ApiUserPayload) => {
        set({
            authStatus: userData.userId ? "authenticated" : "unauthenticated",
            user: userData,
        });
    },
    checkIfAuthenticated: async () => {
        set({
            authStatus: "loading",
        });
        try {
            const { data } = await getUserPayload();
            if(!data.userId) {
                set({
                    authStatus: "unauthenticated",
                });
                return;
            }
            set({
                authStatus: "authenticated",
                user: data,
            });

        } catch {
            set({
                authStatus: "unauthenticated",
                user: { userId: null }
            });
        }
    },
    signUp: async (data) => {
        const { data: responseData } = await signUpUser(data);
        if(responseData?.userId) {
            set({
                authStatus: "authenticated",
                user: responseData,
            });
        }
        return responseData;

    },
    login: async (data) => {
        const { data: responseData } = await loginUser(data);
        if(responseData?.userId) {
            set({
                authStatus: "authenticated",
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
                authStatus: "unauthenticated",
                user: { userId: null },
            });
        } catch {
            set({
                authStatus: "unauthenticated",
                user: { userId: null },
            });
        }
    },
}));