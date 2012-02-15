/**
 * Since HTML/DOM manipulating is a repeated and tedious work,We write some functions here to help us out of that
 *  
 * 
 */



/**
 * 	 hide last view (div) and Load next view(div). View is specified by id.
 */
var lastView = null;
function changeView(viewId) {
	// get next view through page id
	var nextView = getView(viewId);
	if(nextView.length === 0) {
		console.log("Could not find view with ID:" + viewId);
		return;
	}
	if(lastView != null) {
		//hide last view
		lastView.removeClass("active");
	}

	// display next view
	nextView.addClass("active");
	// view has been loaded
	lastView = nextView;
}

/**
 *  get view with specified id
 * 
 */
function getView(viewId){
	return $("#"+viewId);
}
