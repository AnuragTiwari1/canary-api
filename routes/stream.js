const soundCloud = require ('../services/soundCloud');
module.exports = app => {
  app.get ('/api/stream', (req, res) => {
    soundCloud
      .search (req.query)
      .then (result => res.send (result))
      .catch (err => console.log ('got error', err));
  });
};
