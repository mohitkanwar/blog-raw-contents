$("<style type='text/css'> .sorted {background-color:lightgrey;} .unsorted {background-color:lightblue;} </style>").appendTo("head");
var items = [9,3,1,5,6,4,2,8,7,0];

function paint(items,sortedItems){
	$("#sort").append("<br>");
	$("#sort").append("Iteration  "+sortedItems+":");
	var sortedDiv = $("<span class='sorted'></span>");
	var unsortedDiv = $("<span class='unsorted'></span>");
	for(var i=0;i<items.length;i++){

		if(i<=sortedItems){
			sortedDiv.append(items[i]);
		}
		else{
			unsortedDiv.append(items[i]);
		}
	}
	$("#sort").append(sortedDiv);
	$("#sort").append(unsortedDiv);
}
insertionSort(items);
function insertionSort(items) {

    var len     = items.length,     // number of items in the array
        value,                      // the value currently being compared
        i,                          // index into unsorted section
        j;                          // index into sorted section

    for (i=0; i < len; i++) {
 	value = items[i];

        /*
        * Whenever the value in the sorted section is greater than the value
        * in the unsorted section, shift all items in the sorted section over
        * by one. This creates space in which to insert the value.
        */
        for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
        }

        items[j+1] = value;
       paint(items,i);
    }

    return items;
}

