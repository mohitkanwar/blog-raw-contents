$('#rightnavbar-lg-next').click(function(){
    var page;
    if(typeof pagesData.pages[next] != 'undefined'){
    	page = pagesData.pages[next].page;
    }
    while((typeof pagesData.pages[next] == 'undefined')||(page.status!="published")){
    	if(next>=pagesData.pages.length){
    		next = 0;
    	}
    	else{
    		next++;
    	}
    	if(typeof pagesData.pages[next] != 'undefined'){
    		page = pagesData.pages[next].page;
    	}
    }
    window.location.href =page.uri;
});

$('#rightnavbar-lg-previous').click(function(){
	var page;
    if(typeof pagesData.pages[previous] != 'undefined'){
    	page = pagesData.pages[previous].page;
    }
    while((typeof pagesData.pages[previous] == 'undefined')||(page.status!="published")){
    	if(previous<0){
    		previous = pagesData.pages.length-1;
    	}
    	else{
    		previous--;
    	}
    	if(typeof pagesData.pages[previous] != 'undefined'){
    		page = pagesData.pages[previous].page;
    	}
    }
    window.location.href =page.uri;
});

$('#rightnavbar-lg-random').click(function(){
    var index = getRandomArbitrary(0, pagesData.pages.length);

    var page;
    if(typeof pagesData.pages[index] != 'undefined'){
    	page = pagesData.pages[index].page;
    }
    while((typeof pagesData.pages[index] == 'undefined')||(page.status!="published")){
    	index = getRandomArbitrary(0, pagesData.pages.length);
    	
    	if(typeof pagesData.pages[index] != 'undefined'){
    		page = pagesData.pages[index].page;
    	}
    }
    window.location.href =page.uri;

});

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){
	loadRightNavbar();
});
var previous;
var next;
function loadRightNavbar() {
	
    if(pagesData===null) {//we want it to match
        setTimeout(loadRightNavbar, 50);//wait 50 millisecnds then recheck
        return;
    }

    for(var i=0;i<pagesData.pages.length;i++){
    	var page = pagesData.pages[i].page;
    	if(page.uri==$("#current-page-uri").val()){
			previous = i-1;
			next = i+1;
    	}
    }
}
