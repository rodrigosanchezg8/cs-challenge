import { User } from '../../models/User';

export const getUser = async (id: string): Promise<User> => {
    const response = await fetch(`/api/users/${id}`);
    return await response.json();
};
