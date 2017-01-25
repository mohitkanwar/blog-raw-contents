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
	$( "#global-search-form" ).keydown(preventDefaultEnter);
	$( "#global-search-form" ).keyup(preventDefaultEnter);
	$( "#global-search-form" ).keypress(preventDefaultEnter);
});

$(document).click(function(event) { 
    if(!$(event.target).closest('#global-search-component').length) {
        if($("#global-search-results > .dropdown-menu").length>0) {
            $("#global-search-results > .dropdown-menu").empty();
        }
    }        
})
var preventDefaultEnter = function(event){
	    if(event.keyCode == 13) {
	      event.preventDefault();
	      return false;
	    }
  	}
var globalsearch = function globalsearch(key) {
  console.log(key.keyCode)
  //Down key
  if(key.keyCode==40){
  	 if($("#global-search-results > .dropdown-menu .selected").length == 0){
  	 	$("#searchresult_0").addClass("selected");
  	 }
  	 else{
  	 	var selectedIndex = Number($("#global-search-results > .dropdown-menu .selected").attr('id').split("searchresult_")[1]);
  	 	$("#global-search-results > .dropdown-menu .selected").removeClass("selected");
  	 	$("#searchresult_"+ ++selectedIndex).addClass("selected");
  	 }
  	
  }
  //Up key
  else if(key.keyCode==38){
  	 if($("#global-search-results > .dropdown-menu .selected").length == 0){
  	 	$("#searchresult_0").addClass("selected");
  	 }
  	 else{
  	 	var selectedIndex = Number($("#global-search-results > .dropdown-menu .selected").attr('id').split("searchresult_")[1]);
  	 	$("#global-search-results > .dropdown-menu .selected").removeClass("selected");
  	 	$("#searchresult_"+ --selectedIndex).addClass("selected");
  	 }
  	
  }
  //enter
  else if(key.keyCode==13){

  	 var url = $("#global-search-results > .dropdown-menu .selected > a").attr("href");
  	 window.location.pathname = url;
  	
  }
  else{


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
				$("#global-search-results > .dropdown-menu").append( "<li id='searchresult_"+key+"'><a href="+val.uri+">" + val.title + "</a></li>" );
			});
		}
		if(items.length>0){
		  		$('#global-search-results').addClass("open");
		}
	}
}
