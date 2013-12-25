var pm25 = require('../index');

pm25.token = "x766qs3yvRpA2M5Zp52L";

pm25.aqi_ranking(function(err, body){
    console.log(body);
});