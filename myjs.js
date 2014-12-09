function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

$(document).ready(function() {

	$("div#analysisRating h4").hover(function() {
		$("div#analysisRating h4").text("Why?");
	}, function() {
		$("div#analysisRating h4").text("Poor");
	})

})