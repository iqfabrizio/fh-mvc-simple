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
		for(var i = 0; i < users.length; i++) {
			var user = users[i];
			if(user.username === username && user.password === pwd) {
				if(cb != undefined) {
					cb(true);
				}
			}
		}
		if(cb != undefined) {
			cb(false);
		}
	}
};

Controller = {
	userLogin : function() {
		//other code
		var res = userModel.userValidate(username, password, function(res) {
			//other code
		});
		//Process is NOT blocked.
	}
};
userListModel = {
	data : [],
	userValidate : function(username, password, callback) {
		var data = this.data;
		//Non-Blocking Process.
		setTimeout(function() {
			for(var i = 0; i < data.length; i++) {
				//validation code
				callback(true);
			}
			callback(false);
		}, 100);
	}
};