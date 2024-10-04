'use client';
import React from 'react';
import './globals.css';
import { Layout, Menu, MenuProps } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { UserOutlined } from '@ant-design/icons';
import { layoutStyles } from './style';
import { CSSProperties, useState } from 'react';

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

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <h1 style={layoutStyles.title as CSSProperties}>Traveler</h1>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['users-list']}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={layoutStyles.header as CSSProperties}>
                    <h1 style={{ fontSize: '20px', marginLeft: '20px' }}>
                        Users
                    </h1>
                </Header>
                <Content style={{ margin: '16px' }}>
                    <div>{children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Traveler © 2024</Footer>
            </Layout>
        </Layout>
    );
}
