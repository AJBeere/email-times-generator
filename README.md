# email-times-generator
Simple React app with an Express backend that generates and displays a random list of email times.

## How to start

To start the application navigate to the server folder:
```
cd server
```

Once in the server folder run:
```
npm run dev
```
This will start both the server and the client. The server should be running on localhost:5000 and the client should be available at localhost:3000

## Assumptions

* If the database has a previous request and result stored in it, that will display when the page loads.
* It will display the most recent request.
* All previous requests are still stored in the database, despite the app not being able to show them. This is in case we want to add extra functionality in the future.
* The email times are displayed in a very simple format. This is because another service will use the array generated by the backend and so we only need to make it easy for the user to read.
* The graphic requested is a timeline that shows when each email will be sent and by which account in chronological order.
