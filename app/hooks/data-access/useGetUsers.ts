'use client';

import { getUsers } from '@/app/requests/getUsers';
import { User } from '@/models/User';
import useSWR from 'swr';
import { DataHookResponse } from './datahookResponse';

export const useGetUsers = (): DataHookResponse<User[]> => {
    const { data, mutate, error, isValidating, isLoading } = useSWR(
        'users',
        () => getUsers(),
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
