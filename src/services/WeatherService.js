const axios = require('axios');
const OPEN_WEATHER_API_KEY = 'b77e07f479efe92156376a8b07640ced'

function WeatherService() {
  return {

    getCurrentWeather: async (city_name) => {
      let resp = {}
      //TODO adicionar um formatador de camel case aqui
      await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)
        .then((response) => {
          resp = { data: response.data.main }
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          resp = { error: err }
        });
        return resp
      },
      getCurrentWeatherBylatLon: async (lat, lon) => {
        let resp = {}
        await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)
          .then((response) => {
            resp = { data: response.data.main }
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            resp = { error: err }
          });
          return resp
        },
  };
}


module.exports = WeatherService();
