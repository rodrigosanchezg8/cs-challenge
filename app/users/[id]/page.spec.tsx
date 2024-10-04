import React from 'react';
import { render, screen } from '@testing-library/react';
import { useGetUser } from '@/hooks/data-access/useGetUser';
import { users } from '@/models/mock';
import UserProfile from './page';

jest.mock('next/navigation', () => ({
    useParams: jest.fn(),
    useRouter: jest.fn(),
}));

jest.mock('@/hooks/data-access/useGetUser', () => ({
    useGetUser: jest.fn(),
}));

describe('UserProfile Component', () => {
    it('should render user details correctly', () => {
        const user = users[0];
        (useGetUser as jest.Mock).mockReturnValue({
            isLoading: false,
            isError: false,
            data: user,
        });

        render(<UserProfile />);

        expect(screen.getByText(user.email)).toBeInTheDocument();
        expect(screen.getByText(user.country)).toBeInTheDocument();
        expect(screen.getByText(user.activity)).toBeInTheDocument();
        expect(screen.getByText(user.aboutMe)).toBeInTheDocument();
        expect(screen.getByText(user.motive)).toBeInTheDocument();
        expect(screen.getByText(user.nickname)).toBeInTheDocument();
        expect(screen.getByText(user.age)).toBeInTheDocument();
    });
});
