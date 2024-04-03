# JotSpot Frontend Client (Unwir - Open Assesment)

Welcome to the frontend client documentation for JotSpot - a simple web application for jotting down your thoughts and tasks. This documentation provides an overview of the frontend codebase, its structure, and how to run it locally.

## Overview

This frontend client is built using React.js, a popular JavaScript library for building user interfaces. It interacts with a backend API hosted on Railway to fetch, create, update, and delete jots.

You can view the live version at 👉 [jotspot.vercel.app](https://jotspot.vercel.app/ "See live version")

## Getting Started

To get started with the JotSpot frontend client, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

if not install latest LTS version from [here](https://nodejs.org/)

### Installation

1. Clone this repository to your local machine.

git clone <repository-url>

2. Navigate to the project directory.

cd <project-directory>

3. Install dependencies.

npm install

### Running the Application

Once you've installed the dependencies, you can run the application locally.

npm start

This command starts the development server and opens the application in your default web browser.

## Features

### 1. Viewing Jots

- Users can view their existing jots on the homepage.
- Each jot is displayed with its text.
- Completed jots are visually marked.

### 2. Completing Jots

- Users can mark jots as complete by clicking on them.

### 3. Deleting Jots

- Users can delete jots by clicking on the delete button ('x').

### 4. Adding New Jots

- Users can add new jots by clicking the '+' button.
- A popup modal appears where users can input the text for the new jot.
- Jots cannot be empty. A warning modal will appear if the user tries to add an empty jot.

## Folder Structure

The folder structure of the frontend client is as follows:

- `src/`
  - `components/`: Contains React components used in the application.
  - `App.js`: Main component that serves as the entry point for the application.
  - `index.js`: Entry point of the application.
  - `App.css`: Styles for the App component.
  - `index.css`: Global styles.

## Dependencies

- React.js: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making AJAX requests.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.

## Contributing

Contributions to the JotSpot frontend client are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.