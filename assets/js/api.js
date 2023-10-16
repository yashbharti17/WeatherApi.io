'use strict';
const api_key='8c5f131d2561a9b71b629ed765068946';
/** 
* @param {string} URL API url
* @param {Function} callback callback
*/
export const fetchData = function(URL,callback){
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

// export const url ={
//     currentWeather(lat,lon){
//         return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
//     },
//     forecast(lat,lon){
//         return`https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
//     },
//     airPollution(lat,lon){
//         return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
//     },
//     reverseGeo(lat,lon){
//         return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
//     },
    /**
     * 
     * @param {string} query  search query eg : "London", "DElhi"
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`;
      }
}
export const url = {
    currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    },
    forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    },
    airPollution(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;
    },
    reverseGeo(lat, lon) {
      return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${api_key}`;
    },
    
  };
  
