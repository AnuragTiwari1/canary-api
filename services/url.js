const scrobblerURL = 'http://ws.audioscrobbler.com';
module.exports = {
  GET_LASTFM_TOP_TRACKS: `${scrobblerURL}/2.0/?method=chart.gettoptracks&api_key=${process.env.lastFmApiKey}&format=json`,
};
