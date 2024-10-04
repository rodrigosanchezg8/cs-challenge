'use client';

import { User } from '@/models/User';
import useSWR from 'swr';
import { DataHookResponse } from './datahookResponse';
import { getUser } from '@/requests/getUser';

export const useGetUser = (id: string): DataHookResponse<User> => {
    const { data, mutate, error, isValidating, isLoading } = useSWR(
        ['user', id],
        () => getUser(id),
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
