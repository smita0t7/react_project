## Create react app
npx create-react-app <project name>
cd <project name>

## install axios
npm install axios

## setup temporary database
-   Install the json-server package to hold a json file as the temp db.
-   Install it locally and globally both
    npm install -g json-server
    npm install json-server
-   Create a db.json file in the root location of the project and add sample data in it
    
    {
"persons": [
    { "id": 1, "name": "Alice", "age": 25 },
    { "id": 2, "name": "Bob", "age": 30 }
]
}

-   Run the db
json-server --watch db.json --port 3001

## Run the application
-   Run the db in one tab first and then the application in another tab (for application run npm start)
-   make the server and db public so that they can access each other 