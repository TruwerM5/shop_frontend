import api from ".";

export const getUserPayload = async () => {
    return api.get('/auth') 
}