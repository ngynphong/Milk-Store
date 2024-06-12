const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
// const cookieSession = require('cookie-session');
// const passportSetup = require('./passport');

app.use(express.json());
app.use(cors());

const db = require('./models');

//Router productitem
const productRouter = require('./routes/Product');
app.use('/product', productRouter);
//Router brandmilk
const brandMilkRouter = require('./routes/BrandMilk');
app.use('/brand', brandMilkRouter);
//Router country
const CountryRouter = require('./routes/Country');
app.use('/country', CountryRouter);
//Router user
const userRouter = require('./routes/User');
app.use('/auth', userRouter);

//Router user
// const authRouter = require('./routes/auth');
// app.use('/auth', authRouter);

const CompanyRouter = require('./routes/Company');
app.use('/company', CompanyRouter);
//Router AgeRange
const AgeRangeRouter = require('./routes/AgeRange');
app.use('/ageRange', AgeRangeRouter);
//Router Category
const CategoryRouter = require('./routes/Category');
app.use('/category', CategoryRouter);
//Router Order
const OrderRouter = require('./routes/Order');
app.use('/order', OrderRouter);
//Router OrderDetail
const OrderDetailRouter = require('./routes/OrderDetail');
app.use('/orderDetail', OrderDetailRouter);
//Router Payment
const PaymentRouter = require('./routes/Payment');
app.use('/payment', PaymentRouter);
//Router ProductItem
const ProductItemRouter = require('./routes/ProductItem');
app.use('/productItem', ProductItemRouter);

const roleRouter = require('./routes/Role');
app.use('/role', roleRouter);

//Router Cart
const CartRouter = require('./routes/Cart');
app.use('/cart', CartRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    });
});
