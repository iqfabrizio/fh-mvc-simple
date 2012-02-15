var userAuth = {
	login : function() {
		if(users == undefined) {
			return;
		}
		var username, pwd, usernameElement, passwordElement;
		//define variables
		usernameElement = document.getElementById("username");
		passwordElement = document.getElementById("password");
		username = usernameElement.value;
		pwd = passwordElement.value;
		users.userValidate(username, pwd, function(res) {
			if(res === true) {
				document.getElementById("name").innerHTML = username;
				return changeView("logged");
			} else {
				alert("Invalid username or password");
			}
		});
	},
	logout : function() {
		changeView("mainPage");
	}
}