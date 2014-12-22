/*
* http://www.pm25.in/ API 调用模块
*/
var request = require('request')
    , config = require('./config.json')
    , host = config.host
    , apis = config.apis;


var pm25 = {
    fields: config.fields   //返回结果字段说明
};

module.exports = pm25;



/****************** 代码定义 ************************/

/**
 * slice() reference.
 */
var slice = Array.prototype.slice;

// 添加方法
for(var i in apis){
    pm25[i] = createFunc(apis[i]);
}


/*
* 生成方法
*/
function createFunc (api) {
    var params = api.params, path = api.path;
    return function () {
        // 参数处理
        var args = slice.call(arguments), alen = args.length;
        var cbk, opts;
        if (alen === 0 || 'function' !== typeof args[alen-1]) {
            throw new Error('Lack callback function');
        } else {
            cbk = args[alen-1];
            opts = alen > 1 ? args[0] : {};
        }

        // 参数检查, 生成query
        var q = ['token='+ (pm25.token || config.token)];  // 优先使用使用用户设置的key, 否则使用共用key
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
            else{
                var data = JSON.parse(body);
                if(data.error)
                    cbk(new Error(data.error))
                else
                    cbk(null, JSON.parse(body));
            }
        });
    };
}



/*
    TODO
    1. 中文参数进行url编码.
    2. 
*/ 