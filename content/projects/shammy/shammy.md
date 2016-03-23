Shammy
======

Shammy is yet another static site generator. It uses the concepts of merging the real content with a pre-defined template, to build a static site or blog.

Shammy does following actions

 * Initialize
 * Bake
 * Serve

Initialize
----------
Shammy needs a pre-defined folder structure, which is in synch with the standards for the blogs. This action can be invoked by using the command `shammy -i` or `shammy -initialize`.  
This command initializes the folder structure and creates a sample blog.
Following directories and files are created

 * assets
 * content
 * templates
 * config.properties

###assets
This directory is created to store assets like css, script , and image files.

###content
This directory contains the main content of the blog. It is initialized with few sample blogs and their meta data.

###templates
This directory contains the templates that would be utilized according to different needs.

###config.properties
This is the default config properties file, which contains optional configurations on which Shammy runs.

Following configurations are defined

* path.source - input path where shammy directory is initialized
* path.output - path where output files would be stored
* folder.name.assets - folder name (inside source folder) where assets are stored
* folder.name.templates - folder name (inside source folder) where templates are stored
* folder.name.content - folder name (inside source folder) where contents are stored
* keepbackup -  Should shammy store backups before cleaning output folder(default true)
* path.backup - path where backups would be kept before re-building
* server.port - port on which contents would be served (default 3000)
* output.minify - Should shammy minify files (JS/CSS/HTML output files)



Bake
----
Bake action combines the content and templates and prepares output which is static HTML site. This is invoked by `shammy -b` or `shammy -bake`. It also prepares `allpages.json` which contains data about all the pages in a json format. This can be utilized by ajax calls in JavaScript.

Serve
-----
This action serves the contents of output on a Jetty Server for a quick review. To run your contents on server, just invoke command `shammy -s` or `shammy -serve`.  
The serve command can be used along with bake command to bake and immedietely serve the contents on server. e.g. `shammy -b -s` command bakes the contents and serves them on server .
