<#include "./sitecomp/header.ftl">
<#include "menu.ftl">
	<div class="container bs-docs-container">
	<#assign x = 0>  
		<#list topTenPages as p>
			<#if p.summary??>
           	    <#if (x == 0)>
	                   <a href="${p.uri}" class="custom-block">
	                   		<div class="jumbotron">
								<h1><#escape x as x?xml>${p.title}</#escape></h1>
								<p>${p.summary}</p>
							</div>
						</a>
						 
				<#else>
	            	<#if (x  < 10 )>
	                    <#if (((x-1)  % 3 )==0)>
	                             <div class="row">
	                    </#if>
	                    <div class="col-sm-6 col-md-4">
					        <a href="${p.uri}" class="custom-block">
						        <div class="thumbnail ">
						            <div class="caption">
						                <h3><#escape x as x?xml>${p.title}</#escape></h3>
						            </div>
						            <p>${p.summary}</p>
		                  		</div>
	                  		</a>
	                  	</div>
	                    <#if (((x)  % 3 )==0)>
	                    	</div>
	                    </#if>
	                  			          
	                </#if>
	            </#if>
	            <#assign x = x + 1>
            
            <#else>
            <script>
            console.log("${p.title} has no summary");
            </script>
            
            </#if>
   		</#list>
   		<div class="col-sm-12 col-md-12">
   		<a href="/categories.html" class="custom-block">
	        
	         <div class="thumbnail ">
				<h3>Archive</h3>
				<p>Here is the collection of archived articles.</p>
			</div>
		</a>
   		</div>
	</div>
<#include "./sitecomp/footer.ftl">