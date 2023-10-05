const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(
//     cors({
//         origin: '*',
//         methods: 'GET,POST,PUT,DELETE',
//     })
// );
app.get('/', (req, res) => {
    res.send('hello');
});
const PORT = 3001;

app.use((err, req, res, next) => {
    res.status(500).json(err.message || 'Server error');
});
app.listen(PORT, () =>
    console.log('server is running on http://localhost:' + PORT)
);
