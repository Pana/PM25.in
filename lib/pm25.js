/*
* http://www.pm25.in/ API 调用模块
*/
var request = require('request')
    , config = require('./config.json')
    , host = config.host
    , apis = config.apis;


// 有 root/config.json则使用配置token, 否则使用默认公共token
var token;
try{
    token = require('../config.json').token;
}catch(e){
    token = config.token;
}


var pm25 = {
    fields: config.fields   //返回结果字段说明
};

module.exports = pm25;



/****************** 代码定义 ************************/
var querys = ['token='+token];
// 添加方法
for(var i in apis){
    pm25[i] = createFunc(apis[i]);
}


/*
* 生成方法
*/
function createFunc(api){
    var params = api.params, path = api.path;
    return function(cbk, opts){
        opts = opts || {};
        // 参数检查, 生成query
        var q = [].concat(querys);
        // 必要参数检查
        for(var j in params){
            var p = params[j], pv = opts[p];
            if(pv === undefined){
                return cbk(new Error('Lack param: ' + p));
            }else{
                q.push(p + '=' + pv);
            }
        }
        // 可选参数检查
        for(var p in api.option){
            var pv = opts[p];
            if(pv !== undefined)
                q.push(p + '=' + pv);
        }

        var url = host + path + '?' + q.join('&')
        // 注:所有的方法都是GET请求
        request(url, function(err, response, body){
            if(err)
                cbk(err);
            else
                cbk(null, JSON.parse(body));
        });
    };
}

