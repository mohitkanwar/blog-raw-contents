$(document).ready(function(){
	loadCategories();
});

function loadCategories() {
    if(pagesData===null) {//we want it to match
        setTimeout(loadCategories, 50);//wait 50 millisecnds then recheck
        return;
    }
    var items = new Array();
    var json = {};

 	$.each( getPagesData().pages, function( key, val ) {
 		if(val.page.status!="published"){
			if(items.indexOf(val.page.category)<0){
	   			items[items.length] = val.page.category;
	   			var array = new Array();
	   			array[0]=val.page;
	   			json[val.page.category]=array;
			}
			else{
				json[val.page.category][json[val.page.category].length]=val.page;
			}
		}
	});
for(var key in json){
$("#listofarticles").append(  "<p>" );
		$("#listofarticles").append(  camelize(key) );
		$("#listofarticles").append( "<ul>");
		$.each(json[key], function(key,val){
			$("#listofarticles").append( "<li><a href="+val.uri+">" + val.title + "</a></li>" );
		});
		$("#listofarticles").append( "</ul>" );
	}
	$("#listofarticles").append(  "</p>" );
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index != 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
