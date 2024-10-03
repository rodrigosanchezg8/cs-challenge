export interface User {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
    picture_url: string;
    age: number;
    aboutMe: string;
    motive: string;
    skills: string;
    email: string;
    nickname: string;
    activity: 'Host' | 'Traveler';
    friendIds?: string[];
    friends?: User[];
}
