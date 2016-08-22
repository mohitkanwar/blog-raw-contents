A Quick Server
==============
Many a times we need to serve some contents on a server for various needs. On Ubuntu (or any environment where python is installed) a quick HTTP Server is available.
 
To host your files on a HTTP Server, you just need to go to the directory and use SimpleHTTPServer provided by python

	cd \path\to\my\files\
	python -m SimpleHTTPServer

By running above commands, an HTTPServer would be started on port 8000. All files in this directory would be accessible on localhost:8000\

This is very useful in sharing reports, data and other files within your network.   
Since this is an HTTP Server, you can create HTMLs and broadcast them similar to a website. This is very helpful in our team, as we generate reports in HTML format and serve them through one of the machines that we are using.
Such reports can be hosted at one location and the whole team can access it.
One just needs to replace `localhost` with the ip address of the machine on which it is hosted. e.g.

	192.168.45.21:8000/

This would make the folder accessible to friends in a browser.
