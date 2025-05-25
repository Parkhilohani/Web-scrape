import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('public')); 
app.get('/api/books', (req, res) => {
    const filePath = path.join(__dirname, 'books.json');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
