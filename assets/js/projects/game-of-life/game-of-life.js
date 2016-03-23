$(document).ready(function(){

	var parentOfUniverse = $("#universeHolder");
	if(parentOfUniverse.length>0){
		var mainDiv = $('<div>');
		var sideDiv = $('<div>');
		mainDiv.attr('id', 'mainDiv');
		sideDiv.attr('id', 'sideDiv');
		parentOfUniverse.append(mainDiv);
		parentOfUniverse.append(sideDiv);
		paintUniverse(mainDiv,new Array());
		paintRowNumberInput(sideDiv);
		paintNextGenButton(sideDiv);
		paintContinueCheckBox(sideDiv);
		
	}
	
});
function paintRowNumberInput(parent){
	var span = $('<span>');
	var numberOfRows = $('<input>');
	numberOfRows.attr('type', 'text');
	numberOfRows.attr('id', 'numberOfRowsInput');
	numberOfRows.change(paintUniverse($("#mainDiv"),new Array()));
	numberOfRows.val(5);
	span.attr('class','btn');
	span.append('Grid Size');
	span.append(numberOfRows);
	
	parent.append(span);
	
}
function paintNextGenButton(parent){
	var span = $('<span>');
	var submitButton = $('<input>');
	submitButton.attr('type', 'button');
	submitButton.attr('onclick', 'javascript:paintNextGen($("#mainDiv"))');
	submitButton.attr('value', 'Show Next Gen');
	submitButton.attr('class', 'btn');
	span.append(submitButton);
	parent.append(span);
}
function paintContinueCheckBox(parent){
	var span = $('<span>');
	var continueCheckbox = $('<input>');
	continueCheckbox.attr('type', 'checkbox');
	continueCheckbox.attr('id', 'continueCheckbox');
	continueCheckbox.attr('onclick', 'javascript:paintNextGenContinuously($("#mainDiv"))');
	span.attr('class','btn');
	span.append(continueCheckbox);
	span.append('Loop Continuously');
	parent.append(span);
	
}
function getUniverseBorder(){
	return 1;
}
function getUniverseWidth(){
	return '33%';
}

function getNumberOfRows(){
    var rows=5;
	if($('#numberOfRowsInput').length>0){
		rows=$('#numberOfRowsInput').val();
	}
	return rows;
}
function getNumberOfCols(){
	return getNumberOfRows();
}
function isAlive(cellId){
	
	return ($("#"+cellId).length>0)&&($("#"+cellId).html()=="*");
}
function killCell(cellId){
	$("#"+cellId).html("&nbsp;&nbsp;");
}
function giveLifeToCell(cellId){
	$("#"+cellId).html("*");
}
function toggleLife(cellId){
	if(isAlive(cellId)){
		killCell(cellId);
	}
	else{
		giveLifeToCell(cellId)
	}
}
function getNeighbours(cellId){
	var testCellArray=cellId.split('-');
	var x=testCellArray[2];
	var y=testCellArray[3];
	var neighbours = new Array();
	neighbours[0]=testCellArray[0]+'-'+testCellArray[1]+'-'+(x-1)+'-'+(y-1);
	neighbours[1]=testCellArray[0]+'-'+testCellArray[1]+'-'+(x-1)+'-'+y;
	neighbours[2]=testCellArray[0]+'-'+testCellArray[1]+'-'+(x-1)+'-'+(1+parseInt(y));
	neighbours[3]=testCellArray[0]+'-'+testCellArray[1]+'-'+x+'-'+(y-1);
	neighbours[4]=testCellArray[0]+'-'+testCellArray[1]+'-'+x+'-'+(1+parseInt(y));
	neighbours[5]=testCellArray[0]+'-'+testCellArray[1]+'-'+(parseInt(x)+1)+'-'+(y-1);
	neighbours[6]=testCellArray[0]+'-'+testCellArray[1]+'-'+(parseInt(x)+1)+'-'+y;
	neighbours[7]=testCellArray[0]+'-'+testCellArray[1]+'-'+(parseInt(x)+1)+'-'+(1+parseInt(y));
	
	return neighbours;
}
function getCountOfAliveNeighbours(cellId){
	var neighbours = getNeighbours(cellId);
	var count = 0;
    for(var i=0;i<8;i++){
    	if(isAlive(neighbours[i])){
    		count++;
    	}
    }
 return count;
}
function findNextGenAliveCells(){
	var nextGenAliveCells = new Array();
	for(var x=0;x<getNumberOfRows();x++){
		for (var y=0;y<getNumberOfCols();y++) {
			 var cellId = 'universe-cell-'+x+'-'+y;
			 if(shouldBeAliveInNextGen(cellId)){
			 	nextGenAliveCells[nextGenAliveCells.length]=cellId;
			 	
			 }
		};
	}
   
	return nextGenAliveCells;
}
function shouldBeAliveInNextGen(cellId){
var shouldBeAlive = false;
var aliveNeighboursCount=getCountOfAliveNeighbours(cellId);

if(isAlive(cellId)&&(aliveNeighboursCount==2||aliveNeighboursCount==3)){
	shouldBeAlive = true;
}
else if((!isAlive(cellId))&&(aliveNeighboursCount==3)){
	shouldBeAlive = true;
}

return shouldBeAlive;
}
function paintNextGen(parent){
	var nextGenAliveCells = findNextGenAliveCells();
	paintUniverse(parent,nextGenAliveCells);
}
function paintNextGenContinuously(parent){

	var interval = setInterval(function(){
	    if(!$('#continueCheckbox').is(":checked")){
	        clearInterval(interval);
	        return;
	    }
   		 paintNextGen(parent);
	}, 1000); 


}
function paintUniverse(parent,nextGenAliveCells){
	var universe = $('<table>');
	universe.attr('border', getUniverseBorder());
	universe.attr('width', getUniverseWidth());
	universe.attr('align', 'center');
	universe.attr('id', 'universe');
	var numberOfRows=getNumberOfRows();
	var numberOfCols=getNumberOfCols();
	$(parent).html(universe);
for(i=0; i<numberOfRows; i++){
    var row = $('<tr>');
    for(j=0; j<numberOfCols; j++){
	    var col = $('<td>');
	    var id='universe-cell-'+i+'-'+j;
	    col.attr('id',id);
	    col.attr('onclick','toggleLife(this.id);');
	    col.attr('width',universe.width()/numberOfCols +'px');
	    col.attr('height',universe.width()/numberOfRows +'px');
	    col.attr('align', 'center');
	    if(nextGenAliveCells.indexOf(id)<0){
	    	col.html('&nbsp;&nbsp;');
	    }else{
	    	col.html('*');
	    }
	    row.append(col);
	}
    universe.append(row);
}

}