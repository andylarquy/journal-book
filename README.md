# Journal Book API
This is the GraphQL API for the journal book project.
It hits the firebase realtime database.

## How to develop
### First step - Install the dependencies
To install all the dependencies you have to run:
```bash
npm i
```

### Second step - Setup your env vars
You have to create a .env file at the root directory with the content for the following env vars:
```
PORT
FIREBASE_SDK_API_KEY
AUTH_DOMAIN
DATABASE_URL
PROJECT_ID
STORAGE_BUCKET
MESSAGING_SENDER_ID
APP_ID
MEASUREMENT_ID
```

### Third step - Run the project
```bash
npm run dev
```

## Updating the GraphQL Schema
Say you want to add an attribute to a GraphQL schema, or create a new one.
As the project is using typescript, I'm using `codegen`  to generate the GraphQL types to avoid duplicating the logic, this means that if you change the schema you should run ```npm run codegen```.

(I'm still deciding if adding this to the pre-commit hook).

## Run tests
![](https://i.imgflip.com/51u9zd.jpg)