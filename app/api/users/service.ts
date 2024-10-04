import { users } from '@/models/mock';
import { User } from '@/models/User';

export const DEFAULT_PAGE_SIZE = 10;

export const getPagedUsers = (page: number): Partial<User>[] => {
    const mappedUsers: Partial<User>[] = users.map(
        ({
            id,
            nickname,
            email,
            picture_url,
            activity,
            country,
            age,
        }: Partial<User>) => ({
            id,
            nickname,
            email,
            picture_url,
            activity,
            country,
            age,
        })
    );

    const startIndex = (page - 1) * DEFAULT_PAGE_SIZE;
    const endIndex = page * DEFAULT_PAGE_SIZE;

    return mappedUsers.slice(startIndex, endIndex);
};

export const getUserById = (id: string): User | null => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return null;
    }

    const userCopy = { ...user };
    userCopy.friends = user.friendIds?.length
        ? users
              .filter((possibleFriend) =>
                  user.friendIds?.includes(possibleFriend.id)
              )
              .map(({ friends, ...friendAttrs }) => friendAttrs)
        : [];

    return userCopy;
};
