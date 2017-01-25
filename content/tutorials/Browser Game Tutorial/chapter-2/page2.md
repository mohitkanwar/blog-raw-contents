Canvas
======
<div class="row">
<div class="col-md-1 vertical-center">
	<a href="./page1.html" class="btn btn-default" title="Previous">
  <span class="glyphicon glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
</a>
</div>
<div class="col-md-10">
<h2>First Drawing</h2>
<p>
Let's start creating our first drawing. As stated before, we need some script to draw on canvas. Let's chose JavaScript for it.  <br>
There can be multiple canvas in an HTML Page. To identify which canvas are we going to chose, lets add an Id element
</p>
<pre><code>&lt;canvas id="firstDrawing"&gt;&lt;/canvas&gt;</code></pre>
<p>
And lets add the following script
<pre><code>
	/* Get Canvas Element */
	var firstDrawingCanvas = document.getElementById("firstDrawing"); 
	/* get Context from canvas */
	var firstDrawingContext = firstDrawingCanvas.getContext("2d");
	/* define colour to be filled */
	firstDrawingContext.fillStyle = "#FFE4C4";
	/*  define area to be filled */
	firstDrawingContext.fillRect(10,20,150,75);
</code></pre>
<canvas id="firstDrawing" class="showborder"></canvas>
<script src="firstDrawing.js"></script>
</p>
<p>
First, we get the canvas element, then we get the context from canvas and then draw a rectangle on the context.
</p>
<h3>Context</h3>
<p>
The `HTMLCanvasElement.getContext()` method returns a drawing context on the canvas, or null if the context identifier is not supported by the browser. The syntax is
	canvas.getContext(contextType, contextAttributes);
</p>
<h4>contextType</h4>
<p>
Is a DOMString containing the context identifier defining the drawing context associated to the canvas. Possible values are:
</p>
<ul>
<li>2d :Represents a two-dimensional rendering context.</li>
<li>webgl : Represents three-dimensional context (available on browsers implementing OpenGL ES 2.0).</li>
<li>webgl2: Represents three-dimensional context (available on browsers implementing OpenGL ES 3.0).</li>
<li>bitmaprenderer: provides functionality to replace the content of the canvas with a given ImageBitmap.</li>
</ul>
<h4>contextAttributes</h4>
<p>
 Along with contextType we can pass various attributes depending upon the contextType chosen. Not going into details as of now.
 </p>

<b>fillStyle</b>
<p>
<pre><code>firstDrawingContext.fillStyle</code></pre> is a way of letting the context know how to fill it. We can define colours, patterns gradients etc. in the context using this method.
</p>
<b>fillRect</b>
<p>
<pre><code>firstDrawingContext.fillRect(x,y,width,height);</code></pre> This function creates a rectangle in canvas and it takes following parameters
</p>
<ul>
<li>x 	The x-coordinate of the upper-left corner of the rectangle</li>
<li>y 	The y-coordinate of the upper-left corner of the rectangle</li>
<li>width 	The width of the rectangle, in pixels</li>
<li>height 	The height of the rectangle, in pixels</li>
</ul>
</div>
<div class="col-md-1 vertical-center">
	<a href="#" class="btn btn-default disabled" title="Next">
  <span class="glyphicon glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
</a>
</div>
</div>