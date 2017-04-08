#! /usr/bin/env node

var request = require("request");
var fs = require("fs");
var fileName = process.argv[2];

// var demo = fs.readFileSync("lib/demo.js");
// demo = demo.toString();
var demo = "demo";

var debug = false;

request("http://p.evenhidata.com/sitianming/eslintrc/.eslintrc.js", function (error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received



    console.log("准备写入文件");
    if(debug){
        body = demo;
    }
    if(/\.js$/.test(fileName)){
        //配置文件是js类型，不用处理
    }else{
        //配置文件不是js类型，去掉头部
        body = body.replace("module.exports = ","");
        body = body.replace(";","");
    }
    fs.writeFile(fileName, body,  function(err) {
       if (err) {
           return console.error(err);
       }
       console.log("更新成功！");
       console.log("当前eslint版本：2017.04.14");
    });
});

// module.exports = {
//     update : function(){
//         request("http://git.evenhidata.com/sitianming/eslintrc/blob/master/.eslintrc.js", function (error, response, body) {
//             console.log("error:", error); // Print the error if one occurred
//             console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//
//             console.log("准备写入文件");
//             fs.writeFile(process.argv[2], body,  function(err) {
//                if (err) {
//                    return console.error(err);
//                }
//                console.log("更新成功！");
//                console.log("当前eslint版本：2017.04.14");
//             });
//         });
//     }
// };
