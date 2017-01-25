$(document).ready(function(){
	loadProjects();
});

function loadProjects() {
   var myReposUrl="https://api.github.com/users/mohitkanwar/repos";
   var onProjectsLoad= function(data){
	
     data.forEach(function(value,index){
       console.log(index);
       console.log(value);
	var name = value.name.replace(/-/g," ");
	var link = value.html_url;
	var id = value.id;
	var template ='<div class="col-sm-6 col-md-4"><div class="thumbnail"><img src="..." alt=" "><div class="caption"><h3><a href="'+link+'" target="_blank" >'+name+'</a></h3>        <p></p>        <!-- This is temporarily commented <p><button type="button" data-toggle="modal" class="btn btn-primary " data-target="#projModal'+id+'" >Details</button></p>-->      </div>    </div>  </div>';
	var modal = '<div class="modal fade" id="projModal'+id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
  '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
     ' <div class="modal-header">'+
      '  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
       ' <h4 class="modal-title" id="myModalLabel">'+name+'</h4>'+
      '</div>'+
      '<div class="modal-body">'+
       ' ...'+
      '</div>'+
      '<div class="modal-footer">'+
       ' <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
        '<button type="button" class="btn btn-primary">Save changes</button>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
	$("#modals").append(modal);
	$("#listofprojects").append(template);
     });
	
   }
   jQuery.get( myReposUrl ,{}, onProjectsLoad,"JSON" );
   $('[data-toggle="popover"]').popover(); 
}
