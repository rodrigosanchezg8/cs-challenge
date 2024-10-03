import { User } from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../mockUsers';

const getUsers = (req: NextApiRequest, res: NextApiResponse<User[]>) => {
    res.status(200).json(users);
};

export default getUsers;
