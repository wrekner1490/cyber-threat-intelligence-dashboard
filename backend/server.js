const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const threatRoutes = require('./routes/threatRoutes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*'
  }
});

app.use(cors());
app.use(express.json());
app.use('/api/threats', threatRoutes);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

app.set('socketio', io);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));