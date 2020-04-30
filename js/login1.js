mui.init();
mui.plusReady(function(){
	var admin=app1.getAdminGlobalInfo();
	if(admin!=null){
		mui.openWindow({//跳转到用户列表
		    url:'userList.html',
		    id:'userList.html'
		})
	}
    var login=document.getElementById("login");
    login.addEventListener('tap',function(){
		var username= document.getElementById('username');
        var password=document.getElementById("password");
        if(username.value.length==0){
        	mui.toast('用户名不能为空');
        	return false; 
        }
        if(password.value.length==0){
            plus.ui.toast("密码不能为空");
            return false;
        }
        mui.ajax('……',{//后端url
            data:{
                username:username.value,
                password:password.value
            },
            dataType:'json',
            type:'POST',
            timeout:10000,
			contentType:'application/json;charset=utf-8',
            success:function(data){
			//服务器返回响应，根据响应结果，分析是否登录成功；
           //console.log(JSON.stringify(data));
            	username.blur();
            	password.blur();
            	if (data.status == 200) {
            		// 登录成功之后，保存全局管理员到本地缓存
            		var adminJson = data.data;
					app1.setAdminGlobalInfo(adminJson);
            		// 页面跳转到用户列表
            		mui.openWindow("userList.html", "userList.html");
            	}
				else{
            		app.showToast(data.msg, "error");
            	}
            }
        })
    })
})