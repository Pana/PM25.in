var pm25 = require('../index')
    , assert = require('assert');

// pm25.token = "Your token code";

var opts = {city: '北京'};

describe('city25', function(){
    it('api test', function(done){
        pm25.city25(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('city10', function(){
    it('api test', function(done){
        pm25.city10(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('city_co', function(){
    it('api test', function(done){
        pm25.city_co(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('city_no2', function(){
    it('api test', function(done){
        pm25.city_no2(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('city_so2', function(){
    it('api test', function(done){
        pm25.city_so2(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('city_o3', function(){
    it('api test', function(done){
        pm25.city_o3(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('aqi_details', function(){
    it('api test', function(done){
        pm25.aqi_details(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});


describe('aqi', function(){
    it('api test', function(done){
        pm25.aqi(opts, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('station_aqi', function(){
    it('api test', function(done){
        pm25.station_aqi({station_code: '1001A'}, function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
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

        pm25.city_stations(opts, function(err, data){
            assert.equal(err, null);
            assert.equal(data.city, '北京');
            assert.equal(Array.isArray(data.stations), true);
            assert.equal(data.stations.length > 0, true);
            done();
        });
    });
});


describe('all_cities', function(){
    it('api test', function(done){
        pm25.all_cities(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});

describe('aqi_ranking', function(){
    it('api test', function(done){
        pm25.aqi_ranking(function(err, data){
            assert.equal(err, null);
            // console.log(data);
            done();
        });
    });
});


