var pm25 = require('../index')
    , assert = require('assert');

// pm25.token = "Your token code";

var opts = {city: '北京'};

describe('city25', function(){
    it('', function(done){
        pm25.city25(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('city10', function(){
    it('', function(done){
        pm25.city10(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('city_co', function(){
    it('', function(done){
        pm25.city_co(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('city_no2', function(){
    it('', function(done){
        pm25.city_no2(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('city_so2', function(){
    it('', function(done){
        pm25.city_so2(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('city_o3', function(){
    it('', function(done){
        pm25.city_o3(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('aqi_details', function(){
    it('', function(done){
        pm25.aqi_details(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});


describe('aqi', function(){
    it('', function(done){
        pm25.aqi(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, opts);
    });
});

describe('station_aqi', function(){
    it('', function(done){
        pm25.station_aqi(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        }, {station_code: '1001A'});
    });
});

describe('city_list', function(){

    it('city list should return a array', function(done){
        pm25.city_list(function(err, data){
            if(err) console.log(err.message);
            assert.equal(err, null);
            assert.equal(Array.isArray(data.cities), true);
            assert.equal(data.cities.indexOf('北京') > -1, true);
            done();
        });
    });

});

describe('city_stations', function(){
    it('city station no params', function(done){
        pm25.city_stations(function(err, data){
            assert.notEqual(err, null);
            assert.equal(err.message, 'Lack param: city');
            done();
        });
    })

    it('city station list should return a array', function(done){

        pm25.city_stations(function(err, data){
            assert.equal(err, null);
            assert.equal(data.city, '北京');
            assert.equal(Array.isArray(data.stations), true);
            assert.equal(data.stations.length > 0, true);
            done();
        }, {city: 'beijing'});
    });
});


describe('all_cities', function(){
    it('', function(done){
        pm25.all_cities(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('aqi_ranking', function(){
    it('', function(done){
        pm25.aqi_ranking(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});


