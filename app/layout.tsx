'use client';

import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { appTitleStyle, layoutHeaderStyle } from './interfaces/page.interface';
import Item from 'antd/es/list/Item';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

const metadata: Metadata = {
    title: 'Friends App',
    description: 'Challenge App',
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'users',
        icon: <UserOutlined />,
        label: 'Users',
        children: [
            {
                key: 'users-list',
                label: 'List',
            },
        ],
    },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={(value) => setCollapsed(value)}
                    >
                        <h1 style={appTitleStyle}>Friends App</h1>
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['users-list']}
                            mode="inline"
                            items={items}
                        />
                    </Sider>
                    <Layout>
                        <Header style={layoutHeaderStyle}>
                            <h1
                                style={{ fontSize: '20px', marginLeft: '20px' }}
                            >
                                Users
                            </h1>
                        </Header>
                        <Content style={{ margin: '16px' }}>{children}</Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Friends App © 2024
                        </Footer>
                    </Layout>
                </Layout>
            </body>
        </html>
    );
}
