import { users } from '@/models/mock';
import { DEFAULT_PAGE_SIZE, getPagedUsers, getUserById } from './service';

describe('User service', () => {
    it('should return paged users', () => {
        const result = getPagedUsers(1);
        expect(result).toHaveLength(DEFAULT_PAGE_SIZE);

        expect(result[0]).toMatchObject({
            id: users[0].id,
            nickname: users[0].nickname,
        });
    });

    it('should return null for invalid user ID', () => {
        const user = getUserById('999');
        expect(user).toBeNull();
    });

    it('should return a valid user with friends', () => {
        const user = getUserById('1');
        expect(user).not.toBeNull();
        expect(user?.friends).toHaveLength(4);
    });

    it('should return a valid user with no friends', () => {
        const user = getUserById('13');
        expect(user).not.toBeNull();
        expect(user?.friends).toHaveLength(0);
    });
});
