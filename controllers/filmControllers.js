const fs = require('fs');

const film = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.gettAllFilms = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: film.lenght,
    data: { film },
  });
};
exports.getFilmById = (req, res) => {
  const id = req.params.id * 1;
  if (id > film.length) {
    return res.status(404).json({ status: 'fail', message: 'Not avalible id' });
  }
  const fi = film.find((el) => el.id === id);
  res.status(200).json({
    status: 'success',
    data: { fi },
  });
};

exports.postFilm = (req, res) => {
  const len = film.length;
  const newId = len + 1;
  const newFilm = Object.assign({ id: newId }, req.body);
  film.push(newFilm);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(film),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { newFilm },
      });
    }
  );
};
exports.updateFilm = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { film: 'Va fi' },
  });
};

exports.deleteFilm = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
