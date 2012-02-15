/**
 * User model.
 */

var users = {
	data : [],
	isDataLoaded:false,
	load:function(callback){
		var that=this;
		$fh.act({
			act:"getUsers"
		},function(res){
			that.data=res.data;
			that.isDataLoaded=true;
			if (callback){
				callback()
			}
		});
	},
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
