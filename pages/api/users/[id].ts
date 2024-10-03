import { User } from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../mockUsers';

const getUser = (
    req: NextApiRequest,
    res: NextApiResponse<User | { message: string }>
) => {
    const user = users.find((user) => user.id === req.query.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
};

export default getUser;
