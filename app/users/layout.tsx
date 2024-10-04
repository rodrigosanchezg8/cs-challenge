'use client';

import React from 'react';
import { Card } from 'antd';

export default function UsersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Card>{children}</Card>;
}
