$(function(){
	$("#datepicker, #datepickers").datepicker({
		dateFormat: "dd.mm.yy.",
		dayNamesMin: ["PO", "UT", "SR", "ČE", "PE", "SU", "NE"],
		monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
		nextText: ">>>",
		prevText: "<<<",
		firstDay: 1
	});	

});

	// getter

	var dateFormat = $("#datepicker, #datepickers").datepicker( "option", "dateFormat");
	var dayNamesMin = $("#datepicker, #datepickers").datepicker("option", "dayNamesMin");
	var monthNames = $("#datepicker, #datepickers").datepicker("option", "monthNames");
	var nextText = $("#datepicker, #datepickers").datepicker("option", "nextText");
	var prevText = $("#datepicker, #datepickers").datepicker("option", "prevText");
	var firstDay = $("#datepicker, #datepickers").datepicker("option", "firstDay");
	
	// setter
	
	$("#datepicker, #datepickers").datepicker("option", "dateFormat", "dd.mm.yy.");
	$("#datepicker, #datepickers").datepicker("option", "dayNamesMin", ["PO", "UT", "SR", "ČE", "PE", "SU", "NE"]);
	$("#datepicker, #datepickers").datepicker("option", "monthNames", ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]);
	$("#datepicker, #datepickers").datepicker("option", "nextText", ">>>");
	$("#datepicker, #datepickers").datepicker("option", "prevText", "<<<");
	$("#datepicker, #datepickers").datepicker("option", "firstDay", 1);