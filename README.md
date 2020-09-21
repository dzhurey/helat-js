# Helat Js

This repository is a web app to manage event booking like meetup.com, eventbrite.com, loket.com, etc. This app provide page and dashboard for attendee to look for and reserve to attend events, event organizers to manage events and dashboard for internal admin. So here we have 3 different role, they are attendee, organizer, and admin.

## Project Structure

```
+-- root
|  +-- client
|  |  +-- client directory here
|  +-- server
|  |  +-- bin
|  |  +-- config
|  |  +-- public
|  |  +-- src
|  |  |  +-- db
|  |  |  |  +-- migrations
|  |  |  |  +-- seeders
|  |  |  +-- models
|  |  |  +-- routes // controllers
|  |  |  +-- utils // utility function for global purpose
```

## Requirement

1. Nodejs version > 12

2. MySQL

## Installation

### 1. Clone this repository and enter to directory

### 2. Setup server:

#### A. Backend

1. Enter `server` directory

2. Copy file `env.example` and rename it to `.env` then adjust its value

3. Install dependency

```
npm install
```

#### B. Frontend

1. Enter `client` directory

2. Copy file `env.example` and rename it to `.env` then adjust its value

3. Install dependency

```
npm install
```

## Running Development Server

### A. Backend

```
cd server
npm run watch
```

### B. Frontend

```
cd client
npm run serve
```

## Development Guide

// Development guide here