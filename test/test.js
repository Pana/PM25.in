var pm25 = require('../index');

pm25.aqi_ranking(function(err, body){
    console.log(body);
});