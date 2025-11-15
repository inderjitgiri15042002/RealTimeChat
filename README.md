🗨️ Real-Time Chat App

A simple and fast real-time chat application built using HTML, CSS, JavaScript, Express, and Socket.io.
It allows users to send and receive messages instantly with a clean UI and smooth message flow.

🚀 Features

⚡ Real-time messaging using Socket.io

🎨 Clean and modern chat UI

👤 Incoming & outgoing message styling

🌐 WebSocket-based two-way communication

📡 Broadcast messages to all connected users

🟢 Automatic user connection detection

📁 Project Structure
├── public
│   ├── styles.css
│   ├── client.js
│   └── wassup.png
├── index.html
├── server.js
└── README.md

🛠️ Tech Stack

HTML – Structure

CSS – Styling

JavaScript – Client-side logic

Node.js + Express – Server

Socket.io – Real-time communication

📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/realtime-chat-app.git

2️⃣ Install dependencies
npm install

3️⃣ Start the server
npm start

4️⃣ Open the app

Visit:

http://localhost:3000

🧠 How It Works
Client → Server

When a user sends a message:

socket.emit("message", msg);

Server → Other Users

Broadcast message to all except sender:

socket.broadcast.emit("message", msg);

Client Receives Message
socket.on("message", (msg) => {
  appendMessage(msg, "incoming");
});
