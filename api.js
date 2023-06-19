const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

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