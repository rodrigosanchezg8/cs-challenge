import { users } from '@/models/MockUsers';
import { User } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';

interface ParamsProps {
    params: { id: string };
}

export async function GET(req: NextRequest, { params }: ParamsProps) {
    const user: User | undefined = users.find((user) => user.id === params.id);
    if (!user) {
        throw new Error('User not found');
    }

    user.friends = user.friendIds?.length
        ? users
              .filter((possibleFriend) =>
                  user.friendIds?.includes(possibleFriend.id)
              )
              .map(({ friends, ...friendAttrs }) => {
                  return friendAttrs;
              })
        : [];

    return NextResponse.json(user, { status: 200 });
}
