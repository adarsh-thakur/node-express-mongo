const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies');

//get all the movies by this API
router.get('/', async (req, res) => {
	try {
		const movies = await Movie.find();
		res.json(movies);
	} catch (error) {
		res.send({ message: error });
	}
});

//get a movie by MovieID using this API
router.get('/:movieId', async (req, res) => {
	try {
		const movies = await Movie.findById(req.params.movieId);
		res.json(movies);
	} catch (error) {
		res.send({ message: error });
	}
});

//add a movies rating by this API
router.post('/', async (req, res) => {
	const movie = new Movie({
		movieName: req.body.movieName,
		rating: req.body.rating,
	});
	try {
		const saveMovie = await movie.save();
		res.json(saveMovie);
	} catch (error) {
		res.json({ message: error });
	}
});

//update a movie rating using ID

router.patch('/:movieId', async (req, res) => {
	const updateMovie = await Movie.updateOne(
		{ _id: req.params.movieId },
		{
			$set: {
				rating: req.body.rating,
			},
		}
	);
	try {
		res.json(updateMovie);
	} catch (error) {
		res.json({ message: error });
	}
});

//delete a movies by its Id using this API
router.delete('/:movieId', async (req, res) => {
	try {
		const movies = await Movie.remove({ _id: req.params.movieId });
		res.json(movies);
	} catch (error) {
		res.send({ message: error });
	}
});

module.exports = router;
