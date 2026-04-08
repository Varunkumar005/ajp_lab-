const express = require('express');
const app = express();
const PORT = 3000;

app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error: 'Invalid Numbers'});
    }
    res.json({ result: a + b});
});

app.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if(isNaN(a) || isNaN(b)){
        return res.status(400).json({error: 'Invalid Numbers'});
    }
    res.json({ result: a - b});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});