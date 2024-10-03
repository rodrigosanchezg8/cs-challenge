import { User } from '@/models/User';

export const getUsers = async (
    page: number
): Promise<{
    users: Partial<User>[];
    total: number;
}> => {
    const response = await fetch(`/api/users?page=${page}`);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message ?? 'Failed to fetch users');
    }

    return await response.json();
};
