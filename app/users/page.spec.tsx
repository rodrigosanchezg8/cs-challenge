import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useGetUsers } from '../hooks/data-access/useGetUsers';
import UsersTable from './page';
import { users } from '@/models/mock';
import { useRouter } from 'next/navigation';

jest.mock('@/hooks/data-access/useGetUsers', () => ({
    useGetUsers: jest.fn(),
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn().mockReturnValue({
        push: jest.fn(),
    }),
}));

describe('UsersTable Component', () => {
    it('should render table with user data when loaded', () => {
        (useGetUsers as jest.Mock).mockReturnValue({
            isLoading: false,
            isError: false,
            data: { users: [users[0], users[1]], total: 2 },
        });

        render(<UsersTable />);

        expect(screen.getByText(users[0].nickname)).toBeInTheDocument();
        expect(screen.getByText(users[1].nickname)).toBeInTheDocument();

        expect(screen.getByText(users[0].email)).toBeInTheDocument();
        expect(screen.getByText(users[1].email)).toBeInTheDocument();
        expect(screen.getByText(users[0].activity)).toBeInTheDocument();
        expect(screen.getByText(users[1].activity)).toBeInTheDocument();
    });

    it('should navigate to the user profile when clicking a user', () => {
        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

        (useGetUsers as jest.Mock).mockReturnValue({
            isLoading: false,
            isError: false,
            data: { users: [users[0], users[1]], total: 2 },
        });

        render(<UsersTable />);

        const userLink = screen.getByText(users[0].nickname);
        fireEvent.click(userLink);

        expect(mockPush).toHaveBeenCalledWith('/users/1');
    });
});
