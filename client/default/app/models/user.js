/**
 * User model.
 */

var users = { //model uses mockup data
	data : [{
		username:"Joe",
		password:"12345"
	}],
	isDataLoaded : true,
	load : function(callback) {
		//load data to model. Using mock up data. Callback directly.
		if(callback) {
			callback()
		}
	},
	userValidate : function(username, password, cb) {
		var users = this.data;
		//unblock process
		setTimeout(function() {
			for(var i = 0; i < users.length; i++) {
				var user = users[i];
				if(user.username === username && user.password === password) {
					if(cb != undefined) {
						cb(true);
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
