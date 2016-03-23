var pagesData = null;

var getPagesData = function getPagesData() {
  if (pagesData === null) {
     $.getJSON( "/allpages.json", function( data ) {
     	pagesData = data;
	});
  } else return pagesData;
}

$(document).ready(function(){
	$.ajaxSetup({ cache: true });
	getPagesData();
	$( "#global-search" ).keyup(globalsearch);
	$( "#global-search" ).click(globalsearch);
});

$(document).click(function(event) { 
    if(!$(event.target).closest('#global-search-component').length) {
        if($("#global-search-results > .dropdown-menu").length>0) {
            $("#global-search-results > .dropdown-menu").empty();
        }
    }        
})

var globalsearch = function globalsearch() {
  
  var searchText = $('#global-search').val();
  $('#global-search-results').removeClass("open");
  $("#global-search-results > .dropdown-menu").empty();
  var items = new Array();
  		if(searchText!=""){
  			$.each( getPagesData().pages, function( key, val ) {
  				if(val.page.status=="published"){
  					var addthis=false;
  					if(val.page.title.toUpperCase().indexOf(searchText.toUpperCase())>=0){
	    				items[items.length] = val.page;
	    				addthis=true;
					}
					if(!addthis){
						$.each(val.page.tags,function(key,tag){
							if(tag.toUpperCase().indexOf(searchText.toUpperCase())>=0){
		    					addthis=true;
							}
						});
					if(addthis){
						items[items.length] = val.page;
					}
				}	
  			}
		});

		$.each( items, function( key, val ) {
			$("#global-search-results > .dropdown-menu").append( "<li id='searchresult_"+key+"''><a href="+val.uri+">" + val.title + "</a></li>" );
		});
	}
	if(items.length>0){
	  		$('#global-search-results').addClass("open");
	}
}
