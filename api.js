var client_id = 'cb34e40b23fb4561a7464ac3f2c21882';
var client_secret = '6214c01f8a1a46a49c75aa48cd4e2785';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    const { default: SpotifyWebApi } = require('spotify-web-api-js');
    var spotifyApi = new SpotifyWebApi()
    spotifyApi.setAccessToken(token)
  }
});