PM25.in
=======

[PM25.in](http://www.pm25.in/)是BestApp工作室开放的PM2.5查询接口, 提供空气质量PM2.5实时查询接口
所有接口免费. 数据全部来源于网友提供的国家环保网站公开数据.



## Install

    npm install pm25in

## How to use
公有token: `"5j1znBVAsnSf5xQyNQyq"` 

```js
    var pm25 = require('pm25in');
    pm25.token = "5j1znBVAsnSf5xQyNQyq"  // 设置访问token
    pm25.aqi_ranking(function(err, data){
        console.log(err, data);
    });
```


## API

* city25(params, cbk) -- 1.1、获取一个城市所有监测点的PM2.5数据
* city10(params, cbk)-- 1.2、获取一个城市所有监测点的PM10数据
* city_co(params, cbk) -- 1.3、获取一个城市所有监测点的CO数据
* city_no2(params, cbk) -- 1.4、获取一个城市所有监测点的NO2数据
* city_so2(params, cbk) -- 1.5、获取一个城市所有监测点的SO2数据 
* city_o3(params, cbk) -- 1.6、获取一个城市所有监测点的O3数据
* aqi_details(params, cbk) -- 1.7、获取一个城市所有监测点的AQI数据（含详情）
* aqi(params, cbk) -- 1.8、获取一个城市所有监测点的AQI数据（不含详情，仅AQI）
* station_aqi(params, cbk) -- 1.9、获取一个监测点的AQI数据（含详情）
* city_stations(params, cbk) -- 1.10、获取一个城市的监测点列表
* city_list(params, cbk) -- 1.11、获取实施了新《环境空气质量标准》的城市列表，即有PM2.5数据的城市列表
* all_cities(params, cbk) -- 1.12、获取所有城市的空气质量详细数据
* aqi_ranking(params, cbk) -- 1.13、获取全部城市的空气质量指数(AQI)排行榜

params 参数可选

## Notes

* [官方文档](http://www.pm25.in/api_doc)
* 返回数据为json格式
* 不提供历史数据, 历史数据需要开发者自己收集
* 目前接口为Beta版, 有访问次数限制, 具体参看官方文档
* 接口具体参数参看官方文档
* 返回数据字段说明可参看 pm25.fields
* 公有token为大家共用, 可能会提示超过使用次数限制, 建议申请自己的token

## 测试
申请自己token, 修改test/test.js 添加自己token, 默认使用公共token
    
    npm test

执行测试

注: 有的接口报错可能是请求次数过多导致


## 相关资源

* http://www.pm25.in/
* http://www.chapm25.com/
* http://aqicn.org/city/beijing/

## TODO

* 添加参数类型检查


## License
MIT
