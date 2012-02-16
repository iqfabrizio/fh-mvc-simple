var user={
	showUserList:function(){
		getView("userList").find("users").html("");
		users.getUserList(function(arr){
			for (var i=0;i<arr.length;i++){
				var user=arr[i];
				var html="<li>{0}</li>";
				html=html.replace("{0}",user);
				getView("userList").find("#users").append(html);
			}
			changeView("userList");
		});
	},
	back:function(){
		changeView("logged");
	}
};
