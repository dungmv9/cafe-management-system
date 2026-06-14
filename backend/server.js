// 🔧 Server Backend cho Quán Cà Phê
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load biến môi trường
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes tạm thời
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend đang chạy tốt! ☕' });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🔗 Backend API: http://localhost:${PORT}`);
});