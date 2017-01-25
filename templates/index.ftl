<#include "./sitecomp/header.ftl">
<#include "menu.ftl">
	<div class="container bs-docs-container">
	<#assign x = 0>  
		<#list topTenPages as p>
			<#if p.summary??>
           	    <#if (x == 0)>
	                   <div class="jumbotron">
							<a href="${p.uri}"><h1><#escape x as x?xml>${p.title}</#escape></h1></a>
							<p>${p.summary}</p>
							<p>
								<a class="btn btn-primary btn-lg" href="${p.uri}">
									Continue Reading
								</a>
							</p>
						</div>
				<#else>
	            	<#if (x  < 10 )>
	                    <#if (((x -1) % 3 )==0)>
	                             <div class="row">
	                    </#if>
	                    <div class="col-sm-6 col-md-4">
					        <div class="thumbnail">
					            <div class="caption">
					                <a href="${p.uri}"><h3><#escape x as x?xml>${p.title}</#escape></h3></a>
					            </div>
					            <p>${p.summary}</p>
	                            <a class="btn btn-primary" href="${p.uri}">
							        Continue Reading
							    </a>
	                  		</div>
	                  	</div>
	                    <#if ((x  % 3 )==0)>
	                    	</div>
	                    </#if>
	                  			          
	                </#if>
	            </#if>
	            <#assign x = x + 1>
            </#if>
   		</#list>
	</div>
<#include "./sitecomp/footer.ftl">