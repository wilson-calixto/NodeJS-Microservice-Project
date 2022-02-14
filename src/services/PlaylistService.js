const axios = require('axios');
var SpotifyWebApi = require('spotify-web-api-node');

const SPOTIFY_API_KEY = 'b77e07f479efe92156376a8b07640ced'


const spotifyApi = new SpotifyWebApi({
  clientId: '4d8f63b3e1894c73a9d6fa0e7085e60f',
  clientSecret: '6dd251a17f9a422b9ba04175438ad8ab'
});

function PlaylistService() {
  return {
    getCurrentGenre: async (temp) => {
      let resp = {}
      if (temp > 30)
        resp = 'festa'
      else if (temp >= 15 && temp <= 30)
        resp = 'pop'
      else if (temp >= 10 && temp <= 14)
        resp = 'rock'
      else
        resp = 'clássica'

      return resp

    },
    generatMusicSuggestions: async (genre) => {

      let resp = {}
  
      var authorizationCode = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';

      await spotifyApi
      .authorizationCodeGrant(authorizationCode)
      .then(function(data) {
        console.log('Retrieved access token', data.body['access_token']);
    
        spotifyApi.setAccessToken(data.body['access_token']);
    
        return spotifyApi.searchTracks(genre);
      })
      .then(function(data) {
        console.log('I got ' + data.body.tracks.total + ' results!');
    
        var firstPage = data.body.tracks.items;
        let all_music=[]
        firstPage.forEach(function(track, index) {
          all_music.push('music',track.name)
        });
        resp={data:all_music}

      }).catch(function(err) {
        console.log('Something went wrong:', err.message);
        resp={error:err}
      });

      return resp
    },
  };
}


module.exports = PlaylistService();
