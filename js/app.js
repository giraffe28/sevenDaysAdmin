window.app1 = {
	/**
	 * 保存管理员的全局对象
	 * @param {Object} admin
	 */
	setAdminGlobalInfo: function(admin) {
		var adminInfoStr = JSON.stringify(admin);
		plus.storage.setItem("adminInfo", adminInfoStr);
	},
	
	/**
	 * 获取管理员的全局对象
	 */
	getAdminGlobalInfo: function() {
		var adminInfoStr = plus.storage.getItem("adminInfo");
		return JSON.parse(adminInfoStr);
	},
	
	/* 
	*获取用户列表
	 */
	getUserList: function() {
		var userListStr = plus.storage.getItem("userList");
		return JSON.parse(userListStr);
	},
	
	/**
	 * 保存用户列表
	 * @param {Object} userList
	 */
	setUserList: function(userList) {
		var userListStr = JSON.stringify(userList);
		plus.storage.setItem("userList", userListStr);
	},	
}
