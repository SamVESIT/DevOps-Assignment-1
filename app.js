const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
    res.send('Node.js Application is Running Successfully!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
