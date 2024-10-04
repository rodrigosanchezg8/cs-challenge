import { users } from '@/models/mock';
import { NextRequest, NextResponse } from 'next/server';
import { getPagedUsers } from './service';
import { User } from '@/models/User';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') ?? 1;

    const usersInPage: Partial<User>[] = await getPagedUsers(Number(page));

    return NextResponse.json({
        users: usersInPage,
        total: users.length,
    });
}
