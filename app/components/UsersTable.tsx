import { Alert, Skeleton, Spin, Table } from 'antd';
import { useGetUsers } from '../hooks/data-access/useGetUsers';
import { useRouter } from 'next/navigation';

export const UsersTable = () => {
    const { data: users, isLoading, isError, isValidating } = useGetUsers();
    const router = useRouter();

    const columns = [
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (_: any, record: any) => (
                <a
                    onClick={() => router.push(`/user/${record.id}`)}
                    style={{ cursor: 'pointer' }}
                >
                    {record.firstName}
                </a>
            ),
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
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
            <Table dataSource={users} columns={columns} key="id" />
        </div>
    );
};
