Introduction to CSS and SASS/SCSS
=================================

### What is CSS?
CSS is a style sheet language used for describing the presentation of a document written in a markup language e.g. HTML. CSS can define the styles e.g. colour, size, position etc. of various elements in a markup language. 

The element to be styled is associated with a style name, and that style is defined in css files which would contain the looks controlling instructions. For more details, check [this](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) out.

### What is SASS/SCSS?
With increase in the size of a web project, the number of CSS files go on increasing too. When the number of pages or UI components go beyond a level, it is difficult to maintain them. If multiple components are using same colour shade, even modifying all of them to one shade lower becomes a hectic task. Although we can include multiple css files in a page, the sense of modularity is a bit less. [The DRY principle](https://en.wikipedia.org/wiki/Don't_repeat_yourself)  is a principle of software development, aimed at reducing repetition of information of all kinds, especially useful in multi-tier architectures.  
All such and more problems can be solved if we utilize a tool to generate CSS files according to our needs. SASS/SCSS is such a CSS pre-processor. The output of a SASS/SCSS program are CSS files which are syntactically correct. Since these files are generated through a tool, they are free from any human error.
SASS/SCSS provides many advantages over pure CSS like

* Removing hardcoding by ability to define configurable variables
* Repeated blocks of styles
* Modularity
* Keeping repeatable stuff at one place
 
Sass vs Scss
-------------
TBD

Features of SASS/SCSS
----------------
### Variables
While in CSS, we hardcode the values, SASS/SCSS allows us to define a variable which can be used at multiple places. And if in future, if we need to modify it, one place change would do the magic. SASS/SCSS uses a <code>$</code> symbol to define a variable

The CSS way to define a header/footer and body css which have same text font and colour would be
<div class="row"><div class="col-sm-6 col-md-4">
<h4>CSS</h4>
<pre><code>
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
  ... Some body specific css content ...
}
header {
  font: 100% Helvetica, sans-serif;
  color: #333;
... Some header specific css content ...
}
footer {
  font: 100% Helvetica, sans-serif;
  color: #333;
... Some footer specific css content ...
}
</code></pre></div><div class="col-sm-6 col-md-4">
<h4>SASS</h4>
<pre><code>
$base-font:    100% Helvetica, sans-serif
$default-color: #333
body 
	font: $base-font
	color: $default-color
	... Some body specific css content ...
header 
	font: $base-font
	color: $default-color
	... Some header specific css content ...
footer 
	font: $base-font
	color: $default-color
	... Some footer specific css content ...  
</code></pre></div><div class="col-sm-6 col-md-4">
<h4>SCSS</h4> 
<pre><code>
	$base-font:    100% Helvetica, sans-serif;
    $default-color: #333;  
body {
  font: $base-font;
  color: $default-color;
  ... Some body specific css content ...
}
header {
  font: $base-font;
  color: $default-color;
... Some header specific css content ...
}
footer {
  font: $base-font;
  color: $default-color;
... Some footer specific css content ...
}
</code></pre></div>
</div>

If we look closely, the colour and font code is repeated and violates the DRY principle, and if we had a way to define a variable in CSS, it would have been cleaner to replace the hardcodings with a variable which is defined once. Unfortunately CSS doesn't supports variables, but SASS/SCSS does. so hardcoding is converted to variables using SASS/SCSS, and we maintain SASS/SCSS code. Css is the output of SASS/SCSS, which will always be same.

### Nesting
SASS/SCSS provides a slight visual improvement over CSS by introducing hierarchial representation. e.g. in CSS, if you want to define a style to a div element which resides in nav element (hirarchal as in HTML) you can do so by 
<div class="row"><div class="col-sm-6 col-md-4">
<h4>CSS</h4>
<pre><code>
	nav div{
	&nbsp;&nbsp;&nbsp;&nbsp;...
	}
	nav li{
	&nbsp;&nbsp;&nbsp;&nbsp;...
	}
</code></pre></div><div class="col-sm-6 col-md-4">
<h4>SASS</h4>
<pre><code>
&nbsp;&nbsp;&nbsp;&nbsp;	nav 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         div 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            ...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         li 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           ...     
</code></pre></div><div class="col-sm-6 col-md-4">
<h4>SCSS</h4>
<pre><code>
&nbsp;&nbsp;&nbsp;&nbsp;	nav {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         div {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             ...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         }
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         li {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             ...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         }
&nbsp;&nbsp;&nbsp;&nbsp;}
</code></pre></div>
</div>

### Partials and Import
To create a modular structure a SASS/SCSS file can be divided into modules and stored in a partial file. A partial file is named beginning with a <code title="underscore">_</code> character.
A partial file can be loaded using the <code>@import</code> directive.

Although CSS also supports importing and modularizing, each CSS file is loaded with a HTTP request. Which means if you have 5 different CSS files, there would be 5 different HTTP calls. On the other hand, Sass builds a single computed CSS file, which can be loaded with a single HTTP call.

### Mixins
Many a times, while creating CSS designs, we have to create similar styles varying only in little values. A lazier way of doing it is by using mixins.
A mixin is analogous to a function, which takes inputs and creates css according to the input provided.
<div class="row"><div class="col-sm-6 col-md-4">
<h4>CSS</h4>
<pre><code>
.box {
&nbsp;&nbsp;-webkit-border-radius: 10px;
&nbsp;&nbsp;-moz-border-radius: 10px;
&nbsp;&nbsp;-ms-border-radius: 10px;
&nbsp;&nbsp;border-radius: 10px;
}
.smooth-box {
&nbsp;&nbsp;-webkit-border-radius: 20px;
&nbsp;&nbsp;-moz-border-radius: 20px;
&nbsp;&nbsp;-ms-border-radius: 20px;
&nbsp;&nbsp;border-radius: 20px;
}
.near-rect-box {
&nbsp;&nbsp;-webkit-border-radius: 5px;
&nbsp;&nbsp;-moz-border-radius: 5px;
&nbsp;&nbsp;-ms-border-radius: 5px;
&nbsp;&nbsp;border-radius: 5px;
}
</code></pre></div><div class="col-sm-6 col-md-4">
<h4>SASS</h4>
<pre><code>
=border-radius($radius)
&nbsp;&nbsp;-webkit-border-radius: $radius
&nbsp;&nbsp;-moz-border-radius:    $radius
&nbsp;&nbsp;-ms-border-radius:     $radius
&nbsp;&nbsp;border-radius:         $radius
.box
&nbsp;&nbsp;+border-radius(10px)
.smooth-box
&nbsp;&nbsp;+border-radius(20px)
.near-rect-box
&nbsp;&nbsp;+border-radius(5px)
</code></pre></div><div class="col-sm-6 col-md-4">
<h4>SCSS</h4>
<pre><code>
@mixin border-radius($radius) {
&nbsp;&nbsp;-webkit-border-radius: $radius;
&nbsp;&nbsp;-moz-border-radius: $radius;
&nbsp;&nbsp;-ms-border-radius: $radius;
&nbsp;&nbsp;border-radius: $radius;
}
.box { 
&nbsp;&nbsp;@include border-radius(10px); 
}
.smooth-box { 
&nbsp;&nbsp;@include border-radius(20px); 
}
.near-rect-box { 
&nbsp;&nbsp;@include border-radius(5px); 
}
</code></pre></div>
</div>



### Extend

This is one of the most useful features of SASS/SCSS. Using @extend lets you share a set of CSS properties from one selector to another. It helps keep your code very DRY. In our example we're going to create a simple series of messaging for errors, warnings and successes.

<pre>
	<code>
		.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
	</code>
</pre>

SCSS

<pre>
	<code>
		.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
	</code>
</pre>

### Operators
Doing math in your CSS is very helpful. SASS/SCSS has a handful of standard math operators like +, -, *, /, and %. In our example we're going to do some simple math to calculate widths for an aside & article.

We've created a very simple fluid grid, based on 960px. Operations in SASS/SCSS let us do something like take pixel values and convert them to percentages without much hassle. The generated CSS will look like:

<pre>
	<code>
		.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
	</code>
</pre>

SCSS
<pre>
	<code>
		.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}

</code>
</pre>
References
----------
http://sass-lang.com/guide 
 