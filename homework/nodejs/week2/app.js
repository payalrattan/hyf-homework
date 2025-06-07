import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
app.use(express.json());

// Load data from documents.json file
const data = JSON.parse(fs.readFileSync('./documents.json', 'utf-8'));

//test
app.get("/", (req, res) => {
    res.send("This is a search engine");
});

//The endpoint returns all documents if q is not provided; otherwise, it returns only the documents that match the q value.
app.get("/search", (req, res) => {
    const q = req.query.q;
    console.log(req.query.q);

    if (!q) {
        return res.json(data);
    }

    const filteredData = data.filter(item =>
        item.value.toLowerCase().includes(q.toLowerCase())
    );

    res.json({
        Data: filteredData
    });
});
//The endpoint returns the matching ID; otherwise, it returns a 404 error
app.get("/documents/:id", (req, res) => {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
        return res.status(400).send("Invalid ID");
    }
    const filteredId = data.filter(item => item.id === id);
    if (filteredId.length === 0) {
        return res.status(404).send("Document not found");
    }
    res.json(filteredId);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});