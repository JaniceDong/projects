window.onload = function () {
	var
		oClose = document.getElementById('close'),
		oAddMessage = document.getElementById('add-message'),
		oMessageBoard = document.forms['message-board'],
		oList = document.getElementById('list');

	// 关闭留言板
	oClose.onclick = function () {
		oAddMessage.style.display = 'none';
	}

	// 读取留言
	if(window.localStorage) {
		var aMessage = [];
		if(localStorage.getItem('messages')) {
			aMessage = JSON.parse(localStorage.getItem('messages'));
		}

		var
			sHtml = '';
		aMessage.forEach(function (v, k) {
			sHtml += '<li><a href="javascript:;" data-id="' + v.id+ '">&times;</a>' + v.name+ '说：' + v.message + '</li>';
		});

		oList.innerHTML = sHtml ? sHtml : '当前没有任何留言！';
	}

	// 删除留言
	oList.onclick = function (ev) {
		var
			ev = ev || window.event,
			oTarget = ev.srcElement || ev.target;

		if(oTarget.nodeName === 'A') {
			var
				iDataId = Number(oTarget.getAttribute('data-id'));

			aMessage = JSON.parse(localStorage.getItem('messages'));

			aMessage.forEach(function (v, k) {
				if(v.id === iDataId) {
					aMessage.splice(k, 1);
				}
			});

			localStorage.setItem('messages', JSON.stringify(aMessage));

			// 删除DOM节点
			this.removeChild(oTarget.parentNode);

			if(aMessage.length === 0) {
				this.innerHTML = '当前没有任何留言！';
			}
		}
	}

	// 表单提交
	oMessageBoard.onsubmit = function () {
		var
			sUsername = this.username.value,
			sMessage  = this.message.value;

		if(sUsername === '') {
			alert('用户名不能为空！');
			return false;
		}

		if(sMessage === '') {
			alert('留言不能为空！');
			return false;
		}

		if(window.localStorage) {
			

			// 获取留言数量
			if(!localStorage.getItem('num')) {
				var
					iNum = 0;
			} else {
				iNum = localStorage.getItem('num');
			}

			// 获取留言列表
			if(!localStorage.getItem('messages')) {
				var
					aMessage = [];
			} else {
				aMessage = JSON.parse(localStorage.getItem('messages'));
			}

			// 新建留言
			var
				oMessage = {
					id: ++iNum,
					name: sUsername,
					message: sMessage
				};

			// 插入新的DOM节点
			if(aMessage.length === 0) {
				oList.innerHTML = '<li><a href="javascript:;" data-id="' + iNum + '">&times;</a>' + sUsername + '说：' + sMessage + '</li>';
			} else {
				var
				oLi = document.createElement('li');
				oLi.innerHTML = '<a href="javascript:;" data-id="' + iNum + '">&times;</a>' + sUsername + '说：' + sMessage;
				oList.appendChild(oLi);
			}

			// 将新的留言放到数组中去
			aMessage.push(oMessage);

			// 存储留言
			localStorage.setItem('num', iNum);
			localStorage.setItem('messages', JSON.stringify(aMessage));
		} else {
			alert('您的浏览器太陈旧了，请升级现有的浏览器！');
		}
	}
}