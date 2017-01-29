$(document).ready(function() {
	$(".blog-logo").mouseenter(function(){ $(this).filter(':not(:animated)').animate({marginLeft:'10px'},'fast') });
    $(".blog-logo").mouseleave(function(){ $(this).animate({marginLeft:'0px'},'fast') });
    $(".blog-logo").closest("img").removeClass('full-img');

    // Save search term
    $("#nav-search").keydown(function(e) {
	    if(e.which == 13) {
	    	var searchVal = $('#nav-search').val();
       		sessionStorage.setItem("searchVal", searchVal);
        }
	});

    // Write search term to search form
	$('#search-field').val(sessionStorage.getItem("searchVal"));

    var sliding = false;

    // Fancy animation on the project entries
    $(".projectList").on("mouseenter mouseleave", ".project-entry", function() {
        $(this).closest('.project-entry').find('.project-buttons').stop();
        $(this).closest('.project-entry').find('.project-buttons').slideToggle(250);
    });

    // Outdated.
    //$(".tag-projects").on('mouseenter', 'article', function() {
    //    $(this).closest('.tag-projects').find('.project-buttons').stop();
    //    $(this).closest('.tag-projects').find('.project-buttons').slideDown(250);
    //});
    //$(".tag-projects").on('mouseleave', 'article', function() {
    //    $(this).closest('.tag-projects').find('.project-buttons').stop();
    //    $(this).closest('.tag-projects').find('.project-buttons').slideUp(250);
    //});


});