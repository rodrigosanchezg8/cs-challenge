'use client';

import { Alert, Avatar, Skeleton, Spin, Table, Typography } from 'antd';

import { useRouter } from 'next/navigation';
import {
    ColumnGroupType,
    ColumnType,
    TablePaginationConfig,
} from 'antd/es/table';
import { User } from '@/models/User';
import { useState } from 'react';
import { useGetUsers } from '../hooks/data-access/useGetUsers';

const { Text } = Typography;

export default function UsersTable() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { data, isLoading, isError, isValidating } = useGetUsers(currentPage);

    const renderAvatar = ({
        id,
        picture_url,
        nickname,
        email,
    }: Partial<User>) => (
        <a
            onClick={() => router.push(`/users/${id}`)}
            style={{ cursor: 'pointer' }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                    src={picture_url}
                    alt={nickname}
                    size="large"
                    style={{ marginRight: '10px', marginTop: '10px' }}
                />
                <div>
                    <br />
                    <Text strong>{nickname}</Text>
                    <br />
                    <Text>{email}</Text>
                </div>
            </div>
        </a>
    );

    const columns: (
        | ColumnGroupType<Partial<User>>
        | ColumnType<Partial<User>>
    )[] = [
        {
            title: 'User',
            key: 'userInfo',
            width: 400,
            render: renderAvatar,
        },

        {
            title: 'Activity',
            dataIndex: 'activity',
            key: 'activity',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
    ];

    if (isError) {
        return (
            <Alert
                message="Something went wrog"
                description="An error ocurred fetching users"
                type="error"
            />
        );
    }

    if (isLoading) {
        return (
            <Skeleton
                paragraph={{
                    rows: 5,
                }}
            />
        );
    }

    return (
        <div>
            {isValidating ? <Spin /> : null}
            <Table
                dataSource={data?.users}
                columns={columns}
                rowKey="id"
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    total: data?.total,
                }}
                onChange={(pagination: TablePaginationConfig) => {
                    setCurrentPage(pagination.current ?? 1);
                    setPageSize(pagination.pageSize ?? 10);
                }}
            />
        </div>
    );
}
