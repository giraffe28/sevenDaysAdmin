mui.init();
mui.plusReady(function () {
	renderUserPage();
    //从缓存中获取用户列表，并且渲染到页面
    function renderUserPage(){
    	//获取用户列表
    	var UserList=app1.getUserList();
    	//显示用户列表
    	var ulUserList=document.getElementById("ulUserList");
    	if(UserList!=null&&UserList.length>0){
    		var usersHtml="";
    		for(var i=0;i<UserList.length;i++){
    			usersHtml+=renderUser(UserList[i]);
    		}
    		ulUserList.innerHTML=usersHtml;
    	}
    	else{
    		ulUserList.innerHTML="";
    	}
    }
    function renderUser(user){//设置用户列表的单个列表项
    	var html="";
    	html='<li class="mui-table-view-cell">'+
    			'<a class="mui-navigate-right">'+user.nickname+'</a>'+
    			    '</li>';
    	return html;
    }
})
