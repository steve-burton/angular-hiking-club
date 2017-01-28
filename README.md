# Hiking Club

#### January 27, 2017

### By **Steve Burton**

### Specifications
This project will create a web app to maintain a membership database for a hiking club.


## Setup/Installation Requirements

To run the application:
* Clone this repository to your computer.
* Navigate to the project directory in the terminal.
* Use the commands $ npm install and $ bower init to download the packages necessary to run the application.
* Create a file to store an API key:
  src/app/api-keys.ts
  The file should look like this, with your own Firebase credentials:
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

* Now run the commands $ ng build then $ ng serve and navigate to http://localhost:4200 in your web browser to run the project on the local server.

## Known Bugs

None.

## Support and contact details

You can contact me on Github at steve-burton.

## Technologies Used

JavaScript, Angular 2, Node, Bower HTML, CSS, Bootstrap

### License

GPL

Copyright (c) 2017 **_Steve Burton_**

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
