<form class="navbar-form navbar-right" id="global-search-form" autocomplete="off">
  <div class="form-group" id ="global-search-component">
    <input class="form-control" type="text" placeholder="Search" id ="global-search" autocomplete="off" />
    <div class="dropdown" id ="global-search-results">
      <ul class="dropdown-menu" >
      
      </ul>
    </div>
  </div>
</form>
<script src="<#if (content.rootpath)??>${content.rootpath}<#else>/</#if>js/global/globalsearch.js"></script>