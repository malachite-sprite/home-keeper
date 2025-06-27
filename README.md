# HomeKeeper
A for-fun on-the-side project that uses entirely free services to make a working progressive web application that helps users keep on top of maintenance tasks needed around their house.

## Setup
```
npm install
npx netlify link
npm run build
```

## Components
This application is split into four components.
1. The task and user data is stored on a free-tier instance of MongoDB

2. The system that implements push notifications for scheduled tasks runs on a Netlify scheduled function which pulls tasks from the database and sends push notifications to the relevant users direct with the web push API 

3. The backend that handles task configuration updates is implemented on another Netlify scheduled function which interacts with the database.

4. The frontend app itself is a react/typescript UI that is hosted on Netlify.
