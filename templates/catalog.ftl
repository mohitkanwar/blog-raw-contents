<#include "./sitecomp/header.ftl">
<#include "menu.ftl">
	<div class="container bs-docs-container">
	<#assign x = 0>  
   		<#list projectList as p>
           	    <#if (x == 0)>
	                   <a href="${p.html_url}" class="custom-block" target="_blank" >
	                   		<div class="jumbotron">
								<h1><#escape x as x?xml>${p.name}</#escape></h1>
							<#if p.description??><p>${p.description}</p></#if>
							</div>
						</a>
				<#else>
	                    <#if (((x -1) % 3 )==0)>
	                             <div class="row">
	                    </#if>
	                    <div class="col-sm-6 col-md-4">
					        <a href="${p.html_url}" class="custom-block" target="_blank" >
						        <div class="thumbnail ">
						            <div class="caption">
						                <h3><#escape x as x?xml>${p.name}</#escape></h3>
						            </div>
						           <#if p.description??> <p>${p.description}</p></#if>
		                  		</div>
	                  		</a>
	                  	</div>
	                    <#if ((x  % 3 )==0)>
	                    	</div>
	                    </#if>
            </#if>
             <#assign x = x + 1>
   		</#list>
	</div>
<#include "./sitecomp/footer.ftl">