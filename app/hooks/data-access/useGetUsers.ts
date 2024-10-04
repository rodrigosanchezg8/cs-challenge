'use client';

import { User } from '@/models/User';
import useSWR from 'swr';
import { DataHookResponse } from './datahookResponse';
import { getUsers } from '@/requests/getUsers';

export interface GetUsersResponse {
    users: Partial<User>[];
    total: number;
}

export const useGetUsers = (
    page: number
): DataHookResponse<GetUsersResponse> => {
    const { data, mutate, error, isValidating, isLoading } = useSWR(
        ['users', page],
        () => getUsers(page),
        {
            revalidateOnFocus: false,
            revalidateOnMount: true,
            shouldRetryOnError: false,
        }
    );

    return {
        data,
        mutate,
        isLoading,
        isValidating,
        isError: !!error,
    };
};
