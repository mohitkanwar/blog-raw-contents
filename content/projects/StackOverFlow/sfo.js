
var draw=function(d){

	var top20tagsctx = document.getElementById("top20tags").getContext("2d");
	var popularityChangectx = document.getElementById("popularityChange").getContext("2d");

    var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
   
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var jsonFilePath = "data/"+curr_year+"/"+ m_names[curr_month]+"/"+curr_date+"/top100tags.json";
	$.ajax({
  		url: jsonFilePath,
        error: function(response){
            if(response.status=="404"){
              
                currTry=currTry+1;
                if(maxPrevDays>currTry) {
                    $today = new Date();
                    $yesterday = new Date($today);
                    $yesterday.setDate($today.getDate() - currTry);
                    draw($yesterday);
                }
                    
            }
            
        },
    	success:function(responsedata){
    		var responsedata = JSON.parse(responsedata);
    		var top20tagslabels = new Array();
    		var top20tagsvalues = new Array();
    		for(var i=0;i<20;i++){
    			top20tagslabels[top20tagslabels.length]=responsedata.items[i].name;
    			top20tagsvalues[top20tagsvalues.length]=responsedata.items[i].count;
    		}
			var popularityChangevalues = new Array();
			var popularityChangelabels = new Array();
			responsedata.items.sort(function(a,b){
				return b.popularityChange - a.popularityChange;
			});
    		for(var j=0;j<20;j++){
    			popularityChangevalues[j]=responsedata.items[j].popularityChange;
    			popularityChangelabels[j]=responsedata.items[j].name;
    		}

    		var popularityChangedata ={
    			 labels: popularityChangelabels,
			    datasets: [
			        {
			            label: "Top 20 Tags by popularity",
			            fillColor: "rgba(220,220,220,0.5)",
			            strokeColor: "rgba(220,220,220,0.8)",
			            highlightFill: "rgba(220,220,220,0.75)",
			            highlightStroke: "rgba(220,220,220,1)",
			            data: popularityChangevalues
			        }
			    ]
    		};
    		var top20tagsdata = {
			    labels: top20tagslabels,
			    datasets: [
			        {
			            label: "Top 20 Tags by popularity",
			            fillColor: "rgba(220,220,220,0.5)",
			            strokeColor: "rgba(220,220,220,0.8)",
			            highlightFill: "rgba(220,220,220,0.75)",
			            highlightStroke: "rgba(220,220,220,1)",
			            data: top20tagsvalues
			        }
			    ]
			};

var options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}

var top20tags = new Chart(top20tagsctx).Bar(top20tagsdata, options);
var popularityChangetags = new Chart(popularityChangectx).Bar(popularityChangedata, options);

    	},
  		async: false
	});


}
var maxPrevDays = 5;
var currTry = 0;
var loadOnAjax = function(){
     var d = new Date();
    draw(d);
}
$.ajax({
  url: "/js/components/Chart.min.js",
    success:loadOnAjax,
  async: false
});

