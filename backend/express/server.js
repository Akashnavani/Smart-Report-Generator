const express = require('express');
const app = express();
app.use(express.json());

// Hardcoded auth for now until prisma is setup
app.post('/api/auth/login', (req, res) => {
    const { usn, password } = req.body;
    if(usn === 'admin' && password === 'admin') {
        res.json({ token: 'dummy_token', user: { usn: 'admin' }});
    } else {
        res.status(401).json({ error: 'invalid credentials' });
    }
});

app.get('/api/health', (req, res) => res.send('ok'));

app.listen(3001, () => console.log('server running on 3001'));