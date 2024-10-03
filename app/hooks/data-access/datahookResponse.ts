'use client';

import { KeyedMutator } from 'swr';

export interface DataHookResponse<T> {
    isLoading: boolean;
    isError: boolean;
    data?: T;
    mutate?: KeyedMutator<T>;
    isValidating?: boolean;
}
