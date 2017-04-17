<ul class="nav navbar-nav">
    <#list navbarpages as page>
    	<li>
    		<a href="${page.uri}">
    			<#escape x as x?xml>${page.navigationBarTitle}</#escape>
    		</a>
    	</li>
    </#list>
    <!-- Hard coded Links -->
    <li>
    		<a href="/projects/projects.html">
    			Projects
    		</a>
    </li>
</ul>