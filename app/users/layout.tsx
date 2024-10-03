'use client';

import { Card } from 'antd';

export default function UsersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Card>{children}</Card>;
}
