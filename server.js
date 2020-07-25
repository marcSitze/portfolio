const express = require('express');
const app = express();
// Don't forget to comment this line in production
 if(process.env.NODE_ENV != 'production'){
   require('dotenv').config();
}

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const PORT = process.env.PORT || 8000;
const indexRoute = require('./routes/index');
const contactsRoute = require('./routes/contacts');
const youtubeRoute = require('./routes/youtube');


// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const database_url = 'mongodb+srv://marc:marc1234@localdb-2oyid.mongodb.net/test?retryWrites=true&w=majority';
// process.env.DATABASE_URL
// Connect to the db
mongoose.connect(database_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongodb server connected'))
.catch(err => console.error(err));
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Mongodb Connected...'));

// set Static files
//app.use(express.static(__direname + '/public'));
app.use(express.static(__dirname + '/public'));


// Body parser
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// set routes 
app.use('/', indexRoute );
app.use('/contacts', contactsRoute );
app.use('/youtube', youtubeRoute );

app.listen(PORT, () => console.log('Server running at ' + PORT));