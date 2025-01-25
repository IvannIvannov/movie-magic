import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';
import showRatingHelper from './helpers/ratingHelper.js';

const app = express();

//db configuration
try {
    const uri = 'mongodb://localhost:27017/magic-movies';
    await mongoose.connect(uri);

    console.log('DB Connected Successfuly');
} catch(err){
    console.log('Cannot connect to DB');
    console.error(err.message);
    
}

//handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

//express configuration
app.use('/static', express.static('src/public'));
app.use(express.urlencoded({extended: false}));

//setup routes
app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));