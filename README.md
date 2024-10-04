Travel App runs with NextJS `14.2`

## Running the app

-   To run the app, use the command: `npm run dev`
-   To execute tests, use: `npm run test`.

## Features

#### Users table page

-   Contains a paginated table that shows the Picture, Activity (Traveller, Host), Country and Age of all Users.
-   Clicking on a user redirects to its Profile Page.
-   Implemented server-side pagination for efficient data loading.
-   Utilizes SWR, which leverages from each request having an unique key in order to cache for responses upon new data retrieval.

#### User profile page

-   Displays the full detail of an User: interests, skills, email, about me, etc.
-   Shows a list of user’s friends with clickable avatars, redirecting to their respective profiles.
-   Utilizes SWR as well.

## Utilized libraries

-   Ant Design is utilized for the layout, the users table, and text elements in the user profile.
-   SWR to implement Cache Strategy.
-   Jest for writing specs.

## Challenges faced and things to consider

-   **Cache Strategy**. To ensure optimal performance, it’s essential to avoid reloading all data with every page visit. In order to accomplish this, I leveraged from the SWR library and its Cache Strategy.
-   **Router**. I aligned with the best practices for the [newest app router](https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#step-6-migrating-data-fetching-methods) for both client and server rendering. Hence, user client-side files are located in (users/ and users/[id]), and server-side files are located in (api/users and api/users/[id]).
-   **Router/Service approach**. I implemented a Users service layer to handle the logic for fetching user data. Each API route calls the service methods, allowing me to write tests for those methods directly.
-   **Friends feature**. The Friends list was designed to avoid circular references in data, ensuring clean retrieval of relationships between users.
-   **Design**. I went beyond a simple layout and leveraged Ant Design library to build a well polished design and offer a nicer user experience.
-   **Specs**. A robust application must demonstrate stability, so I implemented unit tests to ensure fault tolerance.

## Specs

Specs were added for robustness and stability.

-   Rendering users table page in order to verify the table displays users' data correctly.
-   Redirecting from users table page to a user's profile.
-   Rendering profile property page in order to verify the user data is displayed correctly.
