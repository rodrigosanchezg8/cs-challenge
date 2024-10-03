'use client';

import { useGetUser } from '@/app/hooks/data-access/useGetUser';
import { layoutBodyCardStyle } from '@/app/interfaces/page.interface';
import { Alert, Avatar, Button, Card, Descriptions, Skeleton } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';

export default function UserProfile() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;
    const { data: user, isLoading, isError } = useGetUser(id);

    return (
        <>
            <div style={layoutBodyCardStyle}>
                <Button
                    type="link"
                    onClick={() => router.back()}
                    style={{ marginBottom: '20px', fontSize: '14px' }}
                >
                    {'<'} Back
                </Button>
                <Card>
                    {isLoading ? (
                        <Skeleton
                            paragraph={{
                                rows: 5,
                            }}
                        />
                    ) : null}
                    {isError ? (
                        <Alert
                            message="Something went wrog"
                            description="An error ocurred fetching the user"
                            type="error"
                        />
                    ) : null}

                    {user && (
                        <Descriptions
                            title="User Profile"
                            layout="horizontal"
                            bordered
                            column={1}
                            style={{ marginTop: '20px' }}
                        >
                            <Descriptions.Item label="Picture">
                                <Avatar size={64} icon={<UserOutlined />} />
                            </Descriptions.Item>
                            <Descriptions.Item label="First Name">
                                {user.firstName}
                            </Descriptions.Item>
                            <Descriptions.Item label="Last Name">
                                {user.lastName}
                            </Descriptions.Item>
                        </Descriptions>
                    )}

                    {!isLoading && !isError && !user && (
                        <Alert
                            message="User Not Found"
                            description="The user you are looking for does not exist."
                            type="warning"
                            showIcon
                        />
                    )}
                </Card>
            </div>
        </>
    );
}
