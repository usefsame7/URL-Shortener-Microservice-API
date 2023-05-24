# URL Shortener Microservice API

This repository contains a URL shortener microservice API that allows you to shorten long URLs into shorter, more manageable links. This README file provides an overview of the API and instructions for setting it up and using it.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)


## Features
- Shorten long URLs into shorter links.
- Redirect shortened links to their original URLs.
- Track the number of clicks on each shortened link.


## Prerequisites
To run this microservice API, you need to have the following software installed on your system:
- Node.js (version 10 or higher)
- npm (Node Package Manager) or yarn
- MongoDB (version 3.6 or higher)

## Installation
1. Clone this repository to your local machine using the following command:
   ```
   git clone https://github.com/usefsame7/URL-Shortener-Microservice-API.git
   ```

2. Navigate to the project directory:
   ```
   cd URL-Shortener-Microservice-API
   ```

3. Install the required dependencies by running either of the following commands:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Create a `.env` file in the root of the project and provide the necessary configuration parameters. You can use the `.env.example` file as a template. Make sure to set the appropriate values for the following variables:
   - `MONGODB_URI`: Connection URI for your MongoDB database.
   - `BASE_URL`: Base URL for your microservice API (e.g., `http://localhost:3000`).

5. Start the API server by running:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

6. The API server should now be running locally on the specified port (default: 3000).

## Usage
To use the URL shortener microservice API, you can send HTTP requests to the available endpoints. You can use tools like cURL, Postman, or any programming language/library that supports making HTTP requests.

## Endpoints
The API exposes the following endpoints:

- **POST /shorturl**\
  Creates a shortened URL from a long URL.\
  Request body:
  ```
  {
    "url": "https://www.example.com/very/long/url"
  }
  ```
  Response:
  ```
  {
    "originalUrl": "https://www.example.com/very/long/url",
    "shortUrl": "http://localhost:3000/abc123",
  }
  ```

- **GET /api/shorturl/:id**\
  Redirects the user to the original URL associated with the provided short URL code.\
  Response: Redirects to the original URL.



