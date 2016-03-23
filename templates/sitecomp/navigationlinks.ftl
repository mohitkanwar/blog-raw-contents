<ul class="nav navbar-nav">
    <#list navbarpages as page>
    	<li>
    		<a href="${page.uri}">
    			<#escape x as x?xml>${page.navigationBarTitle}</#escape>
    		</a>
    	</li>
    </#list>
</ul>