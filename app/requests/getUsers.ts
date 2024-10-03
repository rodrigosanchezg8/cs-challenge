import { User } from '../../models/User';

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch('/api/users');
    return await response.json();
};
