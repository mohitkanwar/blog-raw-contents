<#include "./sitecomp/header.ftl">
<#include "menu.ftl">
<a name="top" class="anchor"></a>
	<div class="container">
		<div class="row">
			<div class="col-md-2">
					<div class="visible-lg">
						<#include "./tutorial-components/index.ftl">
					</div>
	  		</div>
	  		<div class="col-md-10">
	  			${.dataModel["page.body"]}
	  		</div>
		</div> 

	
		<div class ="row">
			<div class="col-md-2"></div>
			<div class="col-md-8">
				<div  class="fb-like"  data-share="true"  data-width="450"  data-show-faces="true"></div>
			</div>
			<div class="col-md-2"></div>
		</div>  

    </div>
<#include "./sitecomp/footer.ftl">