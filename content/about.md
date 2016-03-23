About this blog
===============
<div id="mainContent">
<h3><a href="/files/mohit%20Kanwar.pdf">Who am I</a></h3>
<p>
I am Mohit Kanwar, a graduate in Electronics and Communication enginnering and working as a Software Engineer since 2007.<br/>  
I am passionate about learning new stuff and explore the unexplored areas. I like to travel and visit new places.</p>
<h3>Why am I creating this blog? </h3>
<p>
I was passionate about Internet and websites right from the first time I heard about it. I started learning Computers when I was in 3rd grade as an Optional subject. I started learning HTML when I was in 7th grade. I wanted to have a website of my own from the very beginning, but lack of resources (money/time) caused this delay. Hence it is there now.</p>
<p>
I beleave this web-blog would really be helpful for me as it will provide me my own Online Space. I can share my ideas with others. By this website I would be able to learn more, as the best way to learn oneself is by teaching others.
</p>
<p>
Apart from that I would like to maintain this blog as my notes. So that I can refer to them when-ever and where-ever I want.
</p>
<h3>Technology behind this blog</h3>
<p>
Since I do not have enough resources, I look forward to save as much as possible and make use of open-source and free/cheap resources which promise enough reliability and usability.
</p>
<h4> Components </h4>
<ul>
<li><a href="#domain">Domain Name</a></li>
<li><a href="#hosting">Hosting</a></li>
<li><a href="#prep-phase">Technology - Preparatory Stage</a>
    <ul>
    	<li><a href="#markdown">Markdown</a></li>
    	<li><a href="#freemarker">FreeMarker</a></li>
    	<li><a href="#Shammy">Shammy</a></li>
    </ul>
</li>
<li><a href="final-phase">Technology - Final Stage</a>
    <ul>
        <li><a href="#HTML">HTML</a></li>
        <li><a href="#bootstrap">Bootstrap</a></li>
        <li><a href="#jQuery">jQuery</a></li>
        <li><a href="#prettify">prettify</a></li>
        <li><a href="#html5shiv">HTML5shiv</a></li>
        <li><a href="#animate">animate</a></li>
        <li><a href="#asciidoctor">asciidoctor</a></li>
    </ul>
</li>
</ul>
<h4 id="domain">Domain</h4>
<p>A <a href="https://en.wikipedia.org/wiki/Domain_name">Domain Name</a> is an identification string to any website/blog hosted on internet. A domain name must be related to the content hosted on site or the person authoring the blog, so that it can be easily remembered. This blog is hosted at <a href="mohitkanwar.com">mohitkanwar.com</a> and <a href="mohitkanwar.github.io">mohitkanwar.github.io</a></p>
<p>Domain names can be purchased or are available for free. Usually free domain names are sub domains of a bigger site e.g. <a href="mohitkanwar.github.io">mohitkanwar.github.io</a> is available for free since it is hosted as a sub domain of <a href="github.com">github.com</a>.<br>
Sometimes people prefer to have their site hosted at main domain instead of sub-domain, for that a domain needs to be purchased from domain name serving sites e.g. <a href="godaddy.com">godaddy.com</a> as in the case of <a href="mohitkanwar.com">mohitkanwar.com</a></p>
<h4 id="hosting">Hosting</h4>
<p>Host is a location on internet where the content of a blog is placed and can be served. We had following options for hosting a blog</p>
<ul>
	<li>Paid hosting</li>
	<li>Free hosting on blogging sites</li>
	<li>Free hosting on github pages</li>
</ul>
<p>Each of the above options have their own advantages and disadvantages. Having a paid hosting provides many out of the box features and facilities. You get a configurable database where dynamic content can be hosted. Site builder helps building a site even if you are not aware of basic technologies like HTML. The best part is your site is your own, there are no third party ads by the hosting organization as in free hosting on blogging sites. </p>
<p>I found github pages as the most suitable hosting option for my blog. I could get static HTML pages hosted without advertisements of third party and have more control on UI. I can make the site responsive and mobile first. The  best thing is that it is free. The only disadvantages or short comings that I needed to deal with are</p>
<ul>
	<li>Missing Database</li>
	<li>Missing site builder</li>
</ul>
<p>Missing database meant all the pages had to be pre compiled as HTML and missing site builder meant it had to be designed manually. To overcome these issues I utilized JBake and bootstrap</p>
<h4 id="prep-phase">Technology - Preparatory Stage</h4>
<p>Preparation is the key to success. To create a blog I utilized the following technologies</p>
<h4 id="markdown">Markdown</h4>
<p>While writing content or blogs, I need to write as fast as possible while maintaining the formatting as HTML.
Writing HTML tags can be cumbersome and sometimes it doesn't give the visual effects as wanted (at the time of writing). To test the look and feel, I need to save the doc and view it in a browser which consumes some time. A better approach (that i felt) was to use markdown instead.
By using markdown, I can create content in a simple text editor, while giving me a feel of how is it going to look in final HTML at the time of creating the content itself. For more details, refer <a href="/blog/2015/markdown.html">my blog on markdown</a>.</p>
<h4 id="freemarker">FreeMarker</h4>
<p>Freemarker is  a templating engine, which is used to merge a template with data. Thus creating a final output as desired.</p> 
<h4 id="Shammy">Shammy</h4>
<p>Shammy is the assembler which executes merging of templates (freemarker) and content (markdown). The final output of Shammy is HTML Site which can be deployed on any web server e.g. github.</p>
<h4 id="final-phase">Technology - Final Stage</h4>
<p>Preparation is the key to success</p>
<h4 id="HTML">HTML</h4>
<p>Hyper Text Markup Language is a markup language which is a standard across www. HTML is supported by all the browsers and is generally the first language that any web-developer learns.</p>
<h4 id="bootstrap">Bootstrap</h4>
<p>Bootstrap is a quick start styling system which is easy to customize and use. It provides out of the box awsome styles that can be used directly. The best part is that it is responsive and is built with an ideology of mobile-first. So all the pages developed are all-device compatible</p>
<h4 id="jQuery">jQuery</h4>
<p>Bootstrap framework is dependent upon jQuery framework, hence it is a mandatory requirement.</p>
<h4 id="prettify">Prettify</h4>
<p>A Javascript module and CSS file that allows syntax highlighting of source code snippets in an html page. For more details refer <a href="https://github.com/google/code-prettify">google code for prettify</a></p>
<h4 id="html5shiv">HTML5shiv</h4>
<p>HTML5Shiv is a JavaScript workaround, created by Sjoerd Visscher, to enable styling of HTML5 elements in versions of Internet Explorer prior to version 9, which do not allow unknown elements to be styled without JavaScript. for more details refer <a href="http://www.paulirish.com/2011/the-history-of-the-html5-shiv/">Pauls </a></p>
<h4 id="animate">Animate</h4>
<p>A cross-browser library of CSS animations. refer <a href="https://github.com/daneden/animate.css"> its github repo.</a></p>
<h4 id="asciidoctor">Ascii Doctor</h4>
<p>Asciidoctor is a fast text processor and publishing toolchain for converting AsciiDoc content to HTML5, DocBook 5 (or 4.5) and other formats. Refer its <a href="http://asciidoctor.org/">website.</a></p>

</div>
