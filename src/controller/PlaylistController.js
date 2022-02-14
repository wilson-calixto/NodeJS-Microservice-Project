const playlistService = require("../services/PlaylistService");
const weatherService = require("../services/WeatherService");
function PlaylistController() {

  const get_music_by_city_name = async function (req, res) {

    try {
      const city_name = (req.query.city)
      const weather = await weatherService.getCurrentWeather(city_name)
      const genre = await playlistService.getCurrentGenre(weather.data.temp)
      const response = await playlistService.generatMusicSuggestions(genre)
      res.json(response)

    }
    catch (e) {
      logMyErrors(e); 
      res.json({error:e})
    }
  };



  return {
    get_music_by_city_name: get_music_by_city_name,
  };
}

module.exports = PlaylistController();
