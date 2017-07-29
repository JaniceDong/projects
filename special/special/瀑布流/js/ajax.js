/**
	* oParam 对象
*/
function ajax(oParam) {
	var
		type  	 = oParam.type ? oParam.type.toUpperCase() : 'GET',
		data  	 = oParam.data,
		url   	 = oParam.url,
		dataType = oParam.dataType || 'text',
		async 	 = oParam.async || true,
		fn 	  	 = oParam.fn;

	// 创建xhr对象
	if(window.ActiveXObject) {
		var oXhr = new window.ActiveXObject('Microsoft.XMLHTTP');
	} else {
		var oXhr = new XMLHttpRequest();
	}

	// 将数据对象转换成字符串
	if(typeof data === 'object') {
		var aArr = [];
		for(var sAttr in data) {
			aArr.push(sAttr + '=' + encodeURIComponent(data[sAttr]));
		}
		data = aArr.join('&');
	}

	// 如果为GET请求，将数据添加到url后面
	if(type === 'GET' && typeof data !== 'undefined') {
		url += '?' + data;
	}

	// 打开连接
	oXhr.open(type, url, async);

	// 发送
	if(type === 'POST') {
		oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		oXhr.send(data);
	} else {
		oXhr.send();
	}
	
	// 等待接收
	oXhr.onreadystatechange = function () {
		if(oXhr.readyState === 4 && oXhr.status === 200) {
			if(fn) {
				switch(dataType.toLowerCase()) {
					case 'xml':
						fn(oXhr.responseXML);
						break;
					case 'json':
						fn(JSON.parse(oXhr.responseText));
						break;
					case 'text':
						fn(oXhr.responseText);
						break;
					default:
						console.error('数据类型非法！');
						break;
				}
				
			}
		}
	}
}