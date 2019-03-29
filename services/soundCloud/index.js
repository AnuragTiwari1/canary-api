const axios = require ('axios');
const URL = require ('./url');
const key = process.env.soundCloudApiKey;
function prepareUrl (url) {
  return `${url}&client_id=${key}`;
}

function soundCloudSearch (terms) {
  return axios.get (prepareUrl (URL.apiUrl + '/tracks?limit=50&q=' + terms));
}
function resultToStream (result) {
  return {
    source: 'soundCloud',
    id: result.id,
    stream: result.stream_url + `?client_id=${key}`,
    duration: result.duration,
    title: result.title,
    thumbnail: result.user.avatar_url,
  };
}
module.exports = {
  search: query => {
    let terms = query.artist + ' ' + query.track;
    return new Promise ((resolve, reject) => {
      soundCloudSearch (terms)
        .then (res => {
          let info = res.data.length > 0 ? res.data[0] : false;
          resolve (info ? resultToStream (info) : null);
        })
        .catch (err => {
          console.error (
            `Error looking up streams for ${terms} on Soundcloud updated`
          );
          // console.error (err);
          reject (err);
        });
    });
  },

  getAlternateStream: (query, currentStream) => {
    let terms = query.artist + ' ' + query.track;
    return soundCloudSearch (terms)
      .then (data => data.json ())
      .then (results => {
        let info = _.find (
          results,
          result => result && result.id !== currentStream.id
        );
        return info ? this.resultToStream (info) : null;
      })
      .catch (err => {
        console.error (`Error looking up streams for ${terms} on Soundcloud`);
        console.error (err);
      });
  },
};
