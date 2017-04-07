var request = require('request');
var fs = require('fs');

module.exports = {
    update : function(){
        request('http://git.evenhidata.com/sitianming/eslintrc/blob/master/.eslintrc.js', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

            console.log("准备写入文件");
            fs.writeFile('input.txt', body,  function(err) {
               if (err) {
                   return console.error(err);
               }
               console.log("更新成功！");
               console.log("当前eslint版本：2017.04.14");
            });
        });
    }
};
