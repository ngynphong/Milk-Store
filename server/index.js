const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//Router productitem
const productItemRouter = require('./routes/ProductItem');
app.use('/productItem', productItemRouter);
//Router brandmilk
const brandMilkRouter = require('./routes/BrandMilk');
app.use('/brand', brandMilkRouter);
//Router country
const CountryRouter = require('./routes/Country');
app.use('/country', CountryRouter);




//Router user
const userRouter = require('./routes/User');
app.use('/auth', userRouter);



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    });
});
