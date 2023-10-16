'use strict';
import{updateWeather,error404 } from "./app.js";
const defaultLocation = "#/weather?lat=28.6517178&lon=77.2219388"
const currentLocation = function(){
window.navigator.geolocation.getCurrentPosition(res => {
    const{
        latitude,longitute
    } = res.coords;
    updateWeather(`lat=${latitude}`,`lon=${longitute}`);
},err => {
    window.location.hash = defaultLocation;
});
}
/**
 * 
 * @param {string} query searched query
 */
const searchedLocation = query =>{ updateWeather(...query.split("&"));
// update weather("lat=51.5073219", "lon=-0.1276474")

}
const routes = new Map([
    ["/current-location",currentLocation],
    ["/weather",searchedLocation]
]);
const checkHash = function(){
    const requestURL = window.location.hash.slice(1);
    const [route,query] =  requestURL.includes ? requestURL.split("?") : [requestURL];
    routes.get(route) ? routes.get(route)(query):error404();
}

window.addEventListener("hashchange",checkHash);
window.addEventListener("load",function(){
    if(!this.window.location.hash){
        window.location.hash = "#/weather?lat=28.6517178&lon=77.2219388";
    }
    else{
        checkHash();
    }
})