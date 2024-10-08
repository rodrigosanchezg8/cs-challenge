import { User } from '@/models/User';

export const users: User[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        country: 'USA',
        picture_url: 'https://randomuser.me/api/portraits/men/1.jpg',
        age: 32,
        aboutMe:
            'Software engineer who loves traveling and experiencing new cultures.',
        motive: 'I want to meet people from different backgrounds and share stories.',
        skills: '',
        email: 'john.doe@example.com',
        nickname: 'Johnny',
        activity: 'Host',
        friendIds: ['2', '3', '5', '7'],
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        country: 'Canada',
        picture_url: 'https://randomuser.me/api/portraits/women/2.jpg',
        age: 28,
        aboutMe: 'Freelance graphic designer who loves hiking and photography.',
        motive: 'I enjoy traveling to new places and learning about local art scenes.',
        skills: 'Graphic design, photography, and cooking.',
        email: 'jane.smith@example.com',
        nickname: 'Janey',
        activity: 'Traveler',
        friendIds: ['1', '4', '6', '9'],
    },
    {
        id: '3',
        firstName: 'Liam',
        lastName: 'Johnson',
        country: 'Australia',
        picture_url: 'https://randomuser.me/api/portraits/men/3.jpg',
        age: 25,
        aboutMe: 'Avid surfer and environmental activist.',
        motive: 'I want to host travelers who are interested in eco-friendly tourism.',
        skills: '',
        email: 'liam.johnson@example.com',
        nickname: 'LJ',
        activity: 'Host',
        friendIds: ['1', '5', '8'],
    },
    {
        id: '4',
        firstName: 'Emma',
        lastName: 'Williams',
        country: 'United Kingdom',
        picture_url: 'https://randomuser.me/api/portraits/women/4.jpg',
        age: 30,
        aboutMe:
            'Yoga instructor who loves to explore new cultures and cuisines.',
        motive: 'I travel to experience cultural diversity and food from different regions.',
        skills: 'Yoga teaching, cultural exchange, and vegan cooking.',
        email: 'emma.williams@example.com',
        nickname: 'Em',
        activity: 'Traveler',
        friendIds: ['2', '6', '10', '14'],
    },
    {
        id: '5',
        firstName: 'Oliver',
        lastName: 'Brown',
        country: 'New Zealand',
        picture_url: 'https://randomuser.me/api/portraits/men/5.jpg',
        age: 27,
        aboutMe: 'Nature lover and trekking enthusiast.',
        motive: 'I enjoy hosting travelers who appreciate the great outdoors.',
        skills: '',
        email: 'oliver.brown@example.com',
        nickname: 'Ollie',
        activity: 'Host',
        friendIds: ['1', '3', '7', '9'],
    },
    {
        id: '6',
        firstName: 'Jenna',
        lastName: 'Jones',
        country: 'Germany',
        picture_url: 'https://randomuser.me/api/portraits/women/6.jpg',
        age: 29,
        aboutMe: 'Language teacher passionate about cultural exchange.',
        motive: 'I travel to meet new people and practice different languages.',
        skills: 'Language teaching, translation, and storytelling.',
        email: 'jenna.jones@example.com',
        nickname: 'JJ',
        activity: 'Traveler',
        friendIds: ['2', '4', '10'],
    },
    {
        id: '7',
        firstName: 'Ethan',
        lastName: 'Garcia',
        country: 'Spain',
        picture_url: 'https://randomuser.me/api/portraits/men/7.jpg',
        age: 33,
        aboutMe: 'Restaurant owner who loves good food and wine.',
        motive: 'Hosting allows me to share local cuisine with travelers.',
        skills: '',
        email: 'ethan.garcia@example.com',
        nickname: 'E',
        activity: 'Host',
        friendIds: ['1', '5', '9'],
    },
    {
        id: '8',
        firstName: 'Sophia',
        lastName: 'Martinez',
        country: 'France',
        picture_url: 'https://randomuser.me/api/portraits/women/8.jpg',
        age: 31,
        aboutMe:
            'Professional dancer who loves exploring art and architecture.',
        motive: 'Traveling is my way to connect with different artistic communities.',
        skills: 'Dancing, performance, and choreography.',
        email: 'sophia.martinez@example.com',
        nickname: 'Sophie',
        activity: 'Traveler',
        friendIds: ['3', '10', '12'],
    },
    {
        id: '9',
        firstName: 'Eduardo',
        lastName: 'Rodriguez',
        country: 'Mexico',
        picture_url: 'https://randomuser.me/api/portraits/men/9.jpg',
        age: 34,
        aboutMe: 'Musician and music producer.',
        motive: 'Hosting allows me to introduce travelers to Mexican music.',
        skills: '',
        email: 'eduardo.rodriguez@example.com',
        nickname: 'Eddie',
        activity: 'Host',
        friendIds: ['2', '5', '7', '12'],
    },
    {
        id: '10',
        firstName: 'Mia',
        lastName: 'Lopez',
        country: 'Argentina',
        picture_url: 'https://randomuser.me/api/portraits/women/10.jpg',
        age: 26,
        aboutMe: 'Freelance writer who enjoys documenting my travels.',
        motive: 'I travel to find inspiration for my writing.',
        skills: 'Writing, editing, and storytelling.',
        email: 'mia.lopez@example.com',
        nickname: 'Mimi',
        activity: 'Traveler',
        friendIds: ['4', '6', '8'],
    },
    {
        id: '11',
        firstName: 'Noah',
        lastName: 'Silva',
        country: 'Brazil',
        picture_url: 'https://randomuser.me/api/portraits/men/11.jpg',
        age: 22,
        aboutMe: 'Student with a passion for photography and travel.',
        motive: 'I enjoy meeting people and offering them a place to stay.',
        skills: '',
        email: 'noah.silva@example.com',
        nickname: 'Sil',
        activity: 'Host',
        friendIds: ['1', '13', '15', '18'],
    },
    {
        id: '12',
        firstName: 'Ava',
        lastName: 'Schneider',
        country: 'Switzerland',
        picture_url: 'https://randomuser.me/api/portraits/women/12.jpg',
        age: 24,
        aboutMe: 'Graphic designer and solo traveler.',
        motive: 'I love immersing myself in new cultures and meeting locals.',
        skills: 'Graphic design, social media management, and cooking.',
        email: 'ava.schneider@example.com',
        nickname: 'Avie',
        activity: 'Traveler',
        friendIds: ['8', '9', '17', '20'],
    },
    {
        id: '13',
        firstName: 'Lucas',
        lastName: 'Moore',
        country: 'Australia',
        picture_url: 'https://randomuser.me/api/portraits/men/13.jpg',
        age: 31,
        aboutMe: 'Outdoor adventure guide.',
        motive: 'Hosting fellow adventurers and sharing my love for nature.',
        skills: '',
        email: 'lucas.moore@example.com',
        nickname: 'Luke',
        activity: 'Host',
        friendIds: [],
    },
    {
        id: '14',
        firstName: 'Amelia',
        lastName: 'Fischer',
        country: 'Austria',
        picture_url: 'https://randomuser.me/api/portraits/women/14.jpg',
        age: 27,
        aboutMe: 'Digital nomad exploring Europe.',
        motive: 'I travel to find coworking spaces and meet fellow freelancers.',
        skills: 'Web design, development, and photography.',
        email: 'amelia.fischer@example.com',
        nickname: 'Amy',
        activity: 'Traveler',
        friendIds: ['4', '16', '18', '25'],
    },
    {
        id: '15',
        firstName: 'Elijah',
        lastName: 'Nguyen',
        country: 'Vietnam',
        picture_url: 'https://randomuser.me/api/portraits/men/15.jpg',
        age: 35,
        aboutMe: 'Marketing consultant who loves connecting with travelers.',
        motive: 'Hosting gives me a chance to offer travelers insights about Vietnam.',
        skills: '',
        email: 'elijah.nguyen@example.com',
        nickname: 'Eli',
        activity: 'Host',
        friendIds: ['11', '13', '19', '27'],
    },
    {
        id: '16',
        firstName: 'Charlotte',
        lastName: 'Ivanova',
        country: 'Russia',
        picture_url: 'https://randomuser.me/api/portraits/women/16.jpg',
        age: 29,
        aboutMe: 'Food blogger and world traveler.',
        motive: 'I travel to taste the world and document culinary adventures.',
        skills: 'Food blogging, photography, and culinary expertise.',
        email: 'charlotte.ivanova@example.com',
        nickname: 'Charlie',
        activity: 'Traveler',
        friendIds: ['4', '14', '20', '24'],
    },
    {
        id: '17',
        firstName: 'William',
        lastName: 'Kim',
        country: 'South Korea',
        picture_url: 'https://randomuser.me/api/portraits/men/17.jpg',
        age: 28,
        aboutMe: 'Architect who enjoys hosting travelers interested in design.',
        motive: 'I host to share architectural knowledge with international guests.',
        skills: '',
        email: 'william.kim@example.com',
        nickname: 'Will',
        activity: 'Host',
        friendIds: ['12', '19', '23', '29'],
    },
    {
        id: '18',
        firstName: 'Evelyn',
        lastName: 'Larsen',
        country: 'Denmark',
        picture_url: 'https://randomuser.me/api/portraits/women/18.jpg',
        age: 33,
        aboutMe:
            'HR consultant who enjoys traveling and meeting people from different backgrounds.',
        motive: 'I travel to discover new cultures and strengthen my social network.',
        skills: 'People management, interpersonal skills, and organizing events.',
        email: 'evelyn.larsen@example.com',
        nickname: 'Eve',
        activity: 'Traveler',
        friendIds: ['11', '17', '21', '25'],
    },
    {
        id: '19',
        firstName: 'Benjamin',
        lastName: "O'Connor",
        country: 'Ireland',
        picture_url: 'https://randomuser.me/api/portraits/men/19.jpg',
        age: 30,
        aboutMe: 'Engineer with a passion for building and fixing things.',
        motive: 'Hosting gives me the opportunity to help travelers and offer them a comfortable stay.',
        skills: '',
        email: 'benjamin.oconnor@example.com',
        nickname: 'Ben',
        activity: 'Host',
        friendIds: ['13', '15', '17', '29'],
    },
    {
        id: '20',
        firstName: 'Harper',
        lastName: 'Müller',
        country: 'Germany',
        picture_url: 'https://randomuser.me/api/portraits/women/20.jpg',
        age: 26,
        aboutMe: 'Artist and creative entrepreneur.',
        motive: 'I travel to learn new art techniques and get inspiration for my artwork.',
        skills: 'Painting, sculpting, and creative problem solving.',
        email: 'harper.mueller@example.com',
        nickname: 'Harp',
        activity: 'Traveler',
        friendIds: ['12', '14', '16', '24'],
    },
    {
        id: '21',
        firstName: 'Henry',
        lastName: 'Johnson',
        country: 'United States',
        picture_url: 'https://randomuser.me/api/portraits/men/21.jpg',
        age: 45,
        aboutMe: 'History professor and enthusiast of ancient cultures.',
        motive: 'I love sharing my knowledge of history with travelers.',
        skills: '',
        email: 'henry.johnson@example.com',
        nickname: 'Hank',
        activity: 'Host',
        friendIds: ['11', '18', '23', '29'],
    },
    {
        id: '22',
        firstName: 'Victoria',
        lastName: 'Smith',
        country: 'United Kingdom',
        picture_url: 'https://randomuser.me/api/portraits/women/22.jpg',
        age: 38,
        aboutMe: 'Freelance journalist and travel enthusiast.',
        motive: 'I travel to document different lifestyles and cultures for my articles.',
        skills: 'Writing, journalism, and research.',
        email: 'victoria.smith@example.com',
        nickname: 'Vicky',
        activity: 'Traveler',
        friendIds: ['13', '17', '21', '25'],
    },
    {
        id: '23',
        firstName: 'Ethan',
        lastName: 'Wong',
        country: 'Singapore',
        picture_url: 'https://randomuser.me/api/portraits/men/23.jpg',
        age: 29,
        aboutMe: 'Tech entrepreneur and startup mentor.',
        motive: 'I enjoy hosting startup founders and entrepreneurs who travel to Singapore for business.',
        skills: '',
        email: 'ethan.wong@example.com',
        nickname: 'E',
        activity: 'Host',
        friendIds: ['12', '17', '21', '29'],
    },
    {
        id: '24',
        firstName: 'Sophia',
        lastName: 'Anderson',
        country: 'Sweden',
        picture_url: 'https://randomuser.me/api/portraits/women/24.jpg',
        age: 33,
        aboutMe: 'Fitness trainer and wellness coach.',
        motive: 'I travel to learn about global fitness trends and explore wellness retreats.',
        skills: 'Personal training, nutrition, and wellness coaching.',
        email: 'sophia.anderson@example.com',
        nickname: 'Sophie',
        activity: 'Traveler',
        friendIds: ['14', '16', '20', '24'],
    },
    {
        id: '25',
        firstName: 'David',
        lastName: 'Rodriguez',
        country: 'Spain',
        picture_url: 'https://randomuser.me/api/portraits/men/25.jpg',
        age: 40,
        aboutMe: 'Photographer and travel enthusiast.',
        motive: 'Hosting allows me to meet fellow photography lovers and share techniques.',
        skills: '',
        email: 'david.rodriguez@example.com',
        nickname: 'Dave',
        activity: 'Host',
        friendIds: ['13', '15', '18', '22'],
    },
    {
        id: '26',
        firstName: 'Isabella',
        lastName: 'Martinez',
        country: 'Colombia',
        picture_url: 'https://randomuser.me/api/portraits/women/26.jpg',
        age: 27,
        aboutMe: 'Videographer and content creator.',
        motive: 'I travel to film new content and connect with fellow creatives.',
        skills: 'Videography, video editing, and storytelling.',
        email: 'isabella.martinez@example.com',
        nickname: 'Isa',
        activity: 'Traveler',
        friendIds: ['12', '16', '24', '28'],
    },
    {
        id: '27',
        firstName: 'Daniel',
        lastName: 'Nguyen',
        country: 'Vietnam',
        picture_url: 'https://randomuser.me/api/portraits/men/27.jpg',
        age: 32,
        aboutMe: 'Chef and food enthusiast.',
        motive: 'I love hosting travelers and introducing them to Vietnamese cuisine.',
        skills: '',
        email: 'daniel.nguyen@example.com',
        nickname: 'Dan',
        activity: 'Host',
        friendIds: ['15', '17', '19', '29'],
    },
    {
        id: '28',
        firstName: 'Emma',
        lastName: 'Lee',
        country: 'South Korea',
        picture_url: 'https://randomuser.me/api/portraits/women/28.jpg',
        age: 35,
        aboutMe: 'Fashion designer and traveler.',
        motive: 'I travel to attend fashion shows and connect with global designers.',
        skills: 'Fashion design, sewing, and creative direction.',
        email: 'emma.lee@example.com',
        nickname: 'Em',
        activity: 'Traveler',
        friendIds: ['14', '16', '20', '26'],
    },
    {
        id: '29',
        firstName: 'Lucas',
        lastName: 'Petrov',
        country: 'Russia',
        picture_url: 'https://randomuser.me/api/portraits/men/29.jpg',
        age: 30,
        aboutMe: 'Engineer and DIY enthusiast.',
        motive: 'Hosting allows me to meet other tech enthusiasts and share ideas.',
        skills: '',
        email: 'lucas.petrov@example.com',
        nickname: 'Luca',
        activity: 'Host',
        friendIds: ['17', '19', '21', '23'],
    },
    {
        id: '30',
        firstName: 'Ava',
        lastName: 'Ivanova',
        country: 'Bulgaria',
        picture_url: 'https://randomuser.me/api/portraits/women/30.jpg',
        age: 28,
        aboutMe: 'Environmental scientist and world traveler.',
        motive: 'I travel to study ecosystems and meet people interested in sustainability.',
        skills: 'Environmental science, sustainability consulting, and research.',
        email: 'ava.ivanova@example.com',
        nickname: 'Avie',
        activity: 'Traveler',
        friendIds: ['16', '20', '24', '26'],
    },
];
