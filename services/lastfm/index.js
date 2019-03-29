const axios = require ('axios');
const URL = require ('./url');

module.exports = {
  getTopTracks: () => {
    return axios.get (URL.GET_LASTFM_TOP_TRACKS);
  },
};
