var map = {
	pinCurrentLocation : function() {
		changeView("map");
		var mapView=getView("map");
		
		mapView.find("#status").html("Retriving your location");
		$fh.geo({
			interval : 0
		}, function(res) {
			mapView.find("#status").html("Loading map...");
			mapView.find("#lat").text(res.lat);
			mapView.find("#long").text(res.lon);
			$fh.map({
				target : '#map_div',
				lat : res.lat,
				lon : res.lon,
				zoom : 9
			}, function(map) {
				mapView.find("#status").html("Done");
			}, function(msg) {
				console.log(msg);
			});
		})
	},
	back:function(){
		changeView("logged");
	}
};
