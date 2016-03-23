Insertion Sort
==============
What
----
Insertion sort is a 

* Simple
* Efficient (for small data sets)
* More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
* Adaptive, i.e., efficient for data sets that are already substantially sorted
* Stable; i.e., does not change the relative order of elements with equal keys
* In-place; i.e., only requires a constant amount O(1) of additional memory space
* Online; i.e., can sort a list as it receives it

When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort.

The Algo
--------

The algorithm always maintains a sorted sublist in the lower positions of the list. Each new item is then “inserted” back into the previous sublist such that the sorted sublist is one item larger. 
	function insertionSort(items) {

    	var len     = items.length,     // number of items in the array
        	value,                      // the value currently being compared
        	i,                          // index into unsorted section
        	j;                          // index into sorted section

    	for (i=0; i < len; i++) {

        	// store the current value because it may shift later
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
    	}

    	return items;
	}
<div id="sort"></div>
<script src="insertionsort.js"></script>

In the representation above, the sorted elements are <span class="sorted">in light grey shade</span>, and the unsorted ones are <span class="unsorted">in light blue shade</span>. With each iteration, this algorithm picks up an element from the unsorted portion of the list, and ***inserts*** them at the correct location in sorted portion of the list.

References
----------
[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
[Interactive python](http://interactivepython.org/runestone/static/pythonds/SortSearch/TheInsertionSort.html)
[ncz online](https://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/)