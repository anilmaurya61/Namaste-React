const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.static(path.join(__dirname, './Data')));

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Data', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
