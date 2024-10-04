Travel App runs with NextJS `14.2`

## Running the app

Run the app using `npm run dev` and run specs using `npm run test`.

## Features

### Users table page

-   Contains a Table that shows the Picture, Activity (Traveller, Host), Country and Age of each User
-   Clicking on a user redirects to their Profile Page.
-   Implemented server-side pagination for efficient data loading.
-   Utilizes SWR, which leverages from each request having an unique key in order to cache for responses upon new data retrieval.

### User profile page

-   Displays the full detail of an User: interests, skills, email, about me, etc.
-   Shows a list of user’s friends with clickable avatars, redirecting to their respective profiles.

## Used libraries

-   Ant Design is utilized for the layout, the users table, and text elements in the user profile.
-   SWR to implement Cache Strategy.
-   Jest for writing specs.

### Challenges faced

-   Cache Strategy. To ensure optimal performance, it’s essential to avoid reloading all data with every page visit. In order to accomplish this, I leveraged from the SWR library and its Cache Strategy.
-   Router. I aligned with the best practices for the [newest app router](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods) for both client and server rendering. Hence, user client-side files are located in (users/ and users/[id]), and server-side files are located in (api/users and api/users/[id]).
-   Friends feature. A small issue, but to ensure there wasn't any problem with circular references, I excluded the friends property from the user's friends.
-   Design. I went beyond a simple layout and leveraged Ant Design library to build a well polished design and offer a nicer user experience.
-   Specs. A robust application must demonstrate stability, so I implemented unit tests to ensure fault tolerance.

## Specs

Specs were added for asserting:

-   Rendering users table page to verify the table displays users' data correctly.
-   Redirecting from users table page to a user's profile.
-   Rendering profile property page to check the user data is displayed correctly.
