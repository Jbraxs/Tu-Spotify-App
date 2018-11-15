# TuSpotifyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## study test project

## Requirements
You need install: 
- npm

First you need to run your server
```
>> npm install 
>> ng serve
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Authentication
Spotify uses OAuth2 for authentication and authorization.
As of May 29, 2017 all Web API endpoints require an access token.

You can authenticate using a client credentials flow, but this does not provide any authorization to access a user's private data. For most use cases, you'll want to use the authorization code flow. This package includes an Authenticator type to handle the details for you.

Start by registering your application at the following page:

https://developer.spotify.com/my-applications/.

You'll get a client ID and secret key for your application. An easy way to provide this data to your application is to set the SPOTIFY_ID and SPOTIFY_SECRET environment variables. If you choose not to use environment variables, you can provide this data manually.
