function swapColors() {
	if( !bIsOn ) {
		$("body").css({
			"filter": "invert(100%)"
		});

		$("#primaryContainer").css({
			"background-color": "white"
		});
	} else {
		$("body").css({
			"filter": "invert(0%)"
		});

		$("#primaryContainer").css({
			"background-color": "none"
		});
	}

	bIsOn = !bIsOn;
}

var bIsOn = false;
$(document).ready(function() {
	swapColors();
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		swapColors();
	});
});