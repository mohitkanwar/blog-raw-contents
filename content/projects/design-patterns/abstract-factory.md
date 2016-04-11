Abstract Factory
================
Abstract factory design pattern is a type of creational design pattern.
	> It provide an interface for creating families of related or dependent objects without specifying their concrete classes.

Image
-----

(/images/projects/design-patterns/abstract-factory.jpeg)

Intent
------
It has been long established now, that hardcodings impact scalability. Using `new` keyword to create instance has similar effect, as we are hard-wiring a concrete class. Creational patterns tend to remove or move this complexity.

Abstract factory solves this problem when the objects to be created follow  a multilayer hierarchy.
e.g.
<pre>
								ComputerComponent
										|
					-----------------------------------------
					|										|
				Monitor									Keyboard
					|										|
			-----------------						---------------------
			|				|						|					|
			15"				17"				Keyboard with			SimpleKeyboard	
											Multimedia Support		

</pre>
Motivation
----------
Abstract Factory design pattern is a factory of factories

Applicability
-------------

Structure
---------

Participants
------------

Collaborations
--------------

Consequences
------------

Implementation
--------------

Known Uses
----------

Related Patterns
----------------

