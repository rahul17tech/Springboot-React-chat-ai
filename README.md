# Springboot-React-chat-ai (Gemini Chat)

An AI chatbot web application built with React (frontend) and Spring Boot (backend) along with Google Gemini API. Users can interact with the chatbot, and responses are displayed, enhancing the chat experience.

## Features
- AI-powered chatbot interface.
- POST endpoint `/qna/ask` that accepts user questions.
- Background image for UI styling.
- Keyboard "Enter" key support for sending messages.

## Screenshot
![Screenshot 2025-04-14 172647](https://github.com/user-attachments/assets/db8092f3-ba71-4a30-bcb6-0fd4e7eb44f8)


## Technologies Used
### Frontend
- React.js
- Axios
- CSS

### Backend
- Spring Boot
- Spring Web
- Cross-Origin Support (CORS)

## Endpoints
| HTTP Method | Endpoint     | Description |
|-------------|--------------|-------------|
| POST        | `/qna/ask`   | Accepts a JSON body with a "question" and returns an AI-generated response in a nested JSON structure. |

## Frontend Project Structure
- public/ai.jpg         – Background image
- src/App.js            – Main React component
- src/App.css           – Styling
- package.json


## Backend Sample Response
A nested JSON format containing AI-generated text from the Gemini chatbot.

## CSS Styling
Ensure the background image is correctly placed in the public folder and referenced as `/ai.jpg`.

## How to Run

### Backend (Spring Boot)
1. Run the application using your IDE or with Maven.
2. Ensure it runs on `http://localhost:8888`.

### Frontend (React)
1. Navigate to the frontend folder.
2. Run `npm install`.
3. Start the app with `npm start`.
4. React frontend runs on `http://localhost:3000`.

## CORS Configuration
CORS must be enabled in the Spring Boot backend to allow frontend access from localhost:3000.

## Conclusion
This project demonstrates how to connect a modern React-based UI with a Spring Boot REST API backend, complete with background styling, typing effects, and JSON communication.
 
