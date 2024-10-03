import { users } from '@/models/MockUsers';
import { User } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_PAGE_SIZE = 10;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page');

    const mappedUsers: Partial<User>[] = users.map(
        ({
            id,
            nickname,
            email,
            picture_url,
            activity,
            country,
            age,
        }: Partial<User>) => ({
            id,
            nickname,
            email,
            picture_url,
            activity,
            country,
            age,
        })
    );

    const pageNumber = Number(page);
    const pageLimit = DEFAULT_PAGE_SIZE;

    const startIndex = (pageNumber - 1) * pageLimit;
    const endIndex = pageNumber * pageLimit;

    const usersInPage = mappedUsers.slice(startIndex, endIndex);

    return NextResponse.json({
        users: usersInPage,
        total: users.length,
    });
}
