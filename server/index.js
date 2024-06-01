const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Router
// const postRouter = require('./routes/Posts');

// app.use('/posts', postRouter);


db, db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server rinning on port 3001')
    });
});
