$(document).ready(function(){
	loadProjects();
});

function loadProjects() {
    if(pagesData===null) {//we want it to match
        setTimeout(loadProjects, 100);//wait 50 millisecnds then recheck
        return;
    }
    var items = [];
		$.each( getPagesData().pages, function( key, val ) {
			if(val.page.status=="published"){
				if(val.page.category=="project"){
					items.push( "<li><a href="+val.page.uri+">" + val.page.title + "</a></li>" );
				}
			}
		});
 		$("#listofprojects").append(items);
}