'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const bookRouter = require('./routes/book-routes')
<<<<<<< Updated upstream
=======
const authRouter = require('./routes/auth-routers')
const ttsRoutes = require('./routes/tts-routers');
const paypal = require('./services/paypal');
const firebase = require('./db')
const firestore = firebase.firestore();

>>>>>>> Stashed changes


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', bookRouter.routes)
<<<<<<< Updated upstream
=======
app.use('/api/auth', authRouter.routes)
app.use('/api/openai', ttsRoutes.routes)
app.get('/pay', async(req, res) => {
    try{
        const url = await paypal.createOrder();
        res.send(url);
    }catch(err){
        res.send('ERROR: ' + err)
    }
})

app.get('/complete-order', async (req, res) => {
    try {
        await paypal.capturePayment(req.query.token)

        const data = {
            active: true,
            account: 'test@gmail.com'
        };
        const docRef = await firestore.collection('active').add(data);

        res.send('Hoàn thành đơn hàng')
    }catch(err){
        res.send('ERROR: ' + err)
    }
})

app.get('/cancel-order', (req, res) => {
    res.send("Cancel Order")
})
>>>>>>> Stashed changes

app.listen(config.port, () => console.log('listening on port ' + config.port))
