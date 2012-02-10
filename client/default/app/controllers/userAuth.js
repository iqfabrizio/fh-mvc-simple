var userAuth={
	login:function(){
		if (users==undefined){
			return;
		}
		var username, pwd, usernameElement, passwordElement; //define variables
		usernameElement=document.getElementById("username");
		passwordElement=document.getElementById("password");
		username=usernameElement.value;
		pwd=passwordElement.value;
		for (var i=0;i<users.length;i++){
			var user=users[i];
			if (user.username===username && user.password===pwd){
				document.getElementById("name").innerHTML=username;
				return changeView("logged");
			}
		}
		alert("Invalid username or password");
	},
	logout:function(){
		changeView("mainPage");
	}
}
