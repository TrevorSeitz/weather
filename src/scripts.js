// OpenWeatherMap API. Do not share it publicly.
const api = '2e82c53713dd27d4748a39034119fff3'; //Replace with your API

window.addEventListener('load', () => {
    let long;
    let lat;
    // Accessing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
             long = position.coords.longitude;
             lat = position.coords.latitude;
             console.log(long, lat);
      });
    }
  });