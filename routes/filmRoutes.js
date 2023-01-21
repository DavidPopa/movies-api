const express = require('express');
const filmControllers = require('./../controllers/filmControllers');

const filmRouter = express.Router();

filmRouter
  .route('/')
  .get(filmControllers.gettAllFilms)
  .post(filmControllers.postFilm);
filmRouter
  .route('/:id')
  .get(filmControllers.getFilmById)
  .patch(filmControllers.updateFilm)
  .delete(filmControllers.deleteFilm);

module.exports = filmRouter;
