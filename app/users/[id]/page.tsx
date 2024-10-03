'use client';

import { useGetUser } from '@/app/hooks/data-access/useGetUser';
import { Alert, Avatar, Button, Skeleton, Typography } from 'antd';
import {
    UserOutlined,
    MailOutlined,
    GlobalOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    TagsOutlined,
    SmileOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import { useParams, useRouter } from 'next/navigation';
import { CSSProperties } from 'react';
import { profilePageStyle } from './styles';
import { User } from '@/models/User';

const { Text, Title } = Typography;

interface UserProfileProps {
    user: User;
}

export default function UserProfile() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;

    const { data: user, isLoading, isError } = useGetUser(id);

    const renderBack = () => {
        return (
            <Button
                type="link"
                onClick={() => router.push('/')}
                style={{
                    marginBottom: '20px',
                    fontSize: '14px',
                    color: 'gray',
                }}
            >
                {'<'} Back
            </Button>
        );
    };

    if (isLoading) {
        return (
            <>
                {renderBack()}
                <Skeleton
                    paragraph={{
                        rows: 5,
                    }}
                />
            </>
        );
    }

    if (isError) {
        return (
            <>
                {renderBack()}
                <Alert
                    message="Something went wrong"
                    description="An error occurred fetching the user"
                    type="error"
                />
            </>
        );
    }

    if (!user) {
        return (
            <>
                {renderBack()}
                <Alert
                    message="User Not Found"
                    description="The user you are looking for does not exist."
                    type="warning"
                    showIcon
                />
            </>
        );
    }

    const renderDetails = (user: User) => {
        return (
            <>
                <div style={profilePageStyle.profileHeader as CSSProperties}>
                    <Avatar
                        src={user.picture_url}
                        size={105}
                        icon={<UserOutlined />}
                        style={profilePageStyle.avatar}
                    />
                    <Title level={3}>{user.nickname}</Title>
                </div>
                <div style={profilePageStyle.userSummary as CSSProperties}>
                    <div>
                        <UserOutlined style={{ marginRight: 8 }} />
                        <Text>
                            {user.firstName} {user.lastName}
                        </Text>
                    </div>
                    <div>
                        <MailOutlined style={{ marginRight: 8 }} />
                        <Text> {user.email}</Text>
                    </div>
                    <div>
                        <GlobalOutlined style={{ marginRight: 8 }} />
                        <Text> {user.country}</Text>
                    </div>
                    <div>
                        <CalendarOutlined style={{ marginRight: 8 }} />
                        <Text> {user.age}</Text>
                    </div>
                    <div>
                        <SmileOutlined style={{ marginRight: 8 }} />
                        <Text> {user.activity}</Text>
                    </div>
                </div>
                <div style={profilePageStyle.userDetails as CSSProperties}>
                    <div>
                        <TagsOutlined style={{ marginRight: 8 }} />
                        <Text strong>My skills</Text>
                    </div>
                    <div>
                        <Text>{user.skills?.length ? user.skills : 'N/A'}</Text>
                    </div>
                    <div>
                        <EnvironmentOutlined style={{ marginRight: 8 }} />
                        <Text strong>About me</Text>
                    </div>
                    <div>
                        <Text>
                            {user.aboutMe?.length ? user.aboutMe : 'N/A'}
                        </Text>
                    </div>
                    <div>
                        <EnvironmentOutlined style={{ marginRight: 8 }} />
                        <Text strong>Traveler motive</Text>
                    </div>
                    <div>
                        <Text>{user.motive}</Text>
                    </div>
                </div>
            </>
        );
    };

    const renderFriends = (friends: User[]) => {
        return (
            <>
                <div style={{ marginTop: '50px' }}>
                    <TeamOutlined style={{ marginRight: 8 }} />
                    <Text strong>Friends</Text>
                </div>
                <div style={profilePageStyle.friends as CSSProperties}>
                    {!friends?.length ? (
                        <div
                            style={{
                                marginTop: '10px',
                            }}
                        >
                            N/A
                        </div>
                    ) : null}
                    {friends?.map((friend) => {
                        return (
                            <a
                                key={friend.id}
                                onClick={() =>
                                    router.push(`/users/${friend.id}`)
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar
                                        src={friend.picture_url}
                                        alt={friend.nickname}
                                        size="large"
                                        style={{
                                            marginRight: '10px',
                                            marginTop: '10px',
                                        }}
                                    />
                                    <div>
                                        <br />
                                        <Text strong>{friend.nickname}</Text>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <>
            {renderBack()}
            {renderDetails(user)}
            {renderFriends(user.friends ?? [])}
        </>
    );
}
