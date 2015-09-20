$(document).ready(function(){
	$("#changepatient").width($("#changepatient").height());
	$(".changeebolastatus").width($(".changeebolastatus").height());

	$(".notselected, .bleedingchoices").click(function(){
		$(this).toggleClass("activated");
		checkeverything();
	});
	$(".leftmancolumn, .rightmancolumn").click(function(){
		$(this).toggleClass("paininjury");
	});

	});
var checkeverything=function(){

	if ($("#headache>div:nth-child(2)").hasClass("activated")){
		$("#headache").addClass("warning");
	}
	else {
		$("#headache").removeClass("warning");
	}
	if ($("#musclepain>div:nth-child(2)").hasClass("activated")){
		$("#musclepain").addClass("warning");
	}
	else {
		$("#musclepain").removeClass("warning");
	}
	if ($("#cough>div:nth-child(2)").hasClass("activated")){
		$("#cough").addClass("warning");
	}
	else {
		$("#cough").removeClass("warning");
	}
	if ($("#rash>div:nth-child(2)").hasClass("activated")){
		$("#rash").addClass("warning");
	}
	else {
		$("#rash").removeClass("warning");
	}
	if ($("#drink>div:nth-child(3)").hasClass("activated")){
		$("#drink").addClass("warning");
	}
	else {
		$("#drink").removeClass("warning");
	}
	if ($("#eat>div:nth-child(3)").hasClass("activated")){
		$("#eat").addClass("warning");
	}
	else {
		$("#eat").removeClass("warning");
	}
	if ($("#overall>div:nth-child(3)").hasClass("activated")){
		$("#overall").addClass("warning");		
}	
	else {
		$("#overall").removeClass("warning");
	}
}