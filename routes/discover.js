const lastFm = require ('../services/lastfm');

module.exports = app => {
  app.get ('/api/discover/topTracks', (req, res) => {
    lastFm
      .getTopTracks ()
      .then (({data}) => res.send (data))
      .catch (err => res.status (500).send (err));
  });
};
