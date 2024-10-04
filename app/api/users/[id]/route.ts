import { User } from '@/models/User';
import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '../service';

interface ParamsProps {
    params: { id: string };
}

export async function GET(req: NextRequest, { params }: ParamsProps) {
    const user: User | null = getUserById(params.id);

    if (!user) {
        return NextResponse.json(
            { message: 'User not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(user, { status: 200 });
}
