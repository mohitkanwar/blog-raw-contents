
<nav class="navbar  navbar-default sidebar" role="navigation">
  <div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav">
      <li><a href="#" id ="rightnavbar-lg-next"><div class="sidebarlink" >&gt; Next</div></a></li>
      <li><a href="#" id ="rightnavbar-lg-previous"><div class="sidebarlink">&lt; Previous</div></a></li>
      <li><a href="#" id ="rightnavbar-lg-random"><div class="sidebarlink">~ Random</div></a></li>
    </ul>
  </div>
</nav>
<input type ="hidden" id="current-page-uri" value="${.dataModel["page.uri"]}" />
<script src="<#if (content.rootpath)??>${content.rootpath}<#else>/</#if>js/global/rightnavbar-lg.js"></script>  