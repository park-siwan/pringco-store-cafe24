
$("#box > div").hide();
$("#box .tab_on").click(function(e){
	e.preventDefault();
	var con = $(this).find("a").attr("href");
	$("#box > div").hide();

	$("#box .tab_on").removeClass("on");
	$(this).addClass("on");

	$(con).show();
}).eq(0).click();