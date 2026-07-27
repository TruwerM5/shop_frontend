import api from ".";
import type { ApiUserPayload } from '../../types/user';

export const getUserPayload = async () => {
    return api.get<ApiUserPayload>('/auth');
}