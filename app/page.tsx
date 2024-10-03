'use client';

import { Card } from 'antd';
import { layoutBodyCardStyle } from './interfaces/page.interface';
import { UsersTable } from './components/UsersTable';

export default function UsersCard() {
    return (
        <>
            <div style={layoutBodyCardStyle}>
                <Card>
                    <UsersTable />
                </Card>
            </div>
        </>
    );
}
