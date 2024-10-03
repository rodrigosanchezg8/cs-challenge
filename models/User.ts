export interface User {
    id: string;
    picture_url?: string;
    firstName: string;
    lastName?: string;
    country?: string;
    skills?: string;
    aboutMe?: string;
    whyHosting?: string;
    friends?: User[];
    age: number;
}
