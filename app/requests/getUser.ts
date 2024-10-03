import { User } from '@/models/User';

export const getUser = async (id: string): Promise<User> => {
    const response = await fetch(`/api/users/${id}`); // Fetching with query parameter

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message ?? 'Failed to fetch the user');
    }

    return await response.json();
};
