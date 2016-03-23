<!DOCTYPE html>
<html lang="en">
  <head>
  		<#include "title.ftl">
        <#include "metatags.ftl">
        <#include "stylesheets.ftl">
        <#include "favicon.ftl">
        <#include "scripts.ftl">
  </head>
  <body onload="prettyPrint()">
    <script src="<#if (content.rootpath)??>${content.rootpath}<#else>/</#if>js/global/fb-app-initialization.js"></script>
    <script src="<#if (content.rootpath)??>${content.rootpath}<#else>/</#if>js/global/analyticsscript.js"></script>
    <div id="wrap">
   
