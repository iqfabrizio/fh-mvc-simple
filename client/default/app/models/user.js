/**
 * User model.
 */

var users = {
	data : [{
		username : "Joe",
		password : "12345"
	}, {
		username : "John",
		password : "12345"
	}],
	userValidate : function(username, password, cb) {
		var users = this.data;
		setTimeout(function() {
			for(var i = 0; i < users.length; i++) {
				var user = users[i];
				if(user.username === username && user.password === password) {
					if(cb != undefined) {
						cb(true); //found specified user.
						return;
					}
				}
			}
			if(cb != undefined) {
				cb(false);
			}
		}, 100);
	}
};
