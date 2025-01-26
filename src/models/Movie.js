import { Schema, model, Types } from 'mongoose';

//Create schema
const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    raiting: Number,
    description: String,
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
});

//Create model
const Movie = model('Movie', movieSchema);

//Export model
export default Movie;