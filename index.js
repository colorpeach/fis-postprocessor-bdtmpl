'use strict';

var bd = require('baidutemplate').template;
var path = require("path");

module.exports = function(content, file, conf){
    var contentReg = /<!--\s*TMPL\s*(?:\=\s*(.*?)\s*)?-->([\s\S]*?)<!--\s*\/TMPL\s*-->/g;
	var root = fis.util.realpath('./');
	var fileDir = path.dirname(conf.filename);
	
	return content.replace(contentReg, function (str, json, contentStr) {
		var jsonPath = '';
		var data = {};
		
		if (!json) {
			return bd(contentStr, data);
		}
		
		try {
			
			data = JSON.parse(json);
			
		} catch(e) {
			
			if (json[0] === '.') {
				// 相对路径
				jsonPath = path.join(fileDir, json);
			} else {
				jsonPath = path.join(root, json);
			}
			
			data = JSON.parse(fis.file.wrap(jsonPath).getContent());
		}
	
		return bd(contentStr, data).trim();
	});
};