// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
    res.send('Hello World! new version: v1.2.0');
});
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

 
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
