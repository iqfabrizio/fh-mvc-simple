var userAuth = {
	login : function() {
		var username, pwd, usernameElement, passwordElement;
		//define variables
		usernameElement = document.getElementById("username");
		passwordElement = document.getElementById("password");
		username = usernameElement.value;
		pwd = passwordElement.value;
		document.getElementById("name").innerHTML = username;
		return changeView("logged");
	},
	logout : function() {
		changeView("mainPage");
	}
}