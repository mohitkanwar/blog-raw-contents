var designpatterns = { 
	"patterns" :[
		{
			"name" : "Abstract Factory",
			"type" : "Creational",
			"definition" : "Abstract Factory Design Pattern - Provide an interface for creating families of related or dependent objects without specifying their concrete classes.",
			"image":"factory-settings.png",
			"intent":"TODO",
			"motivation":"TODO",
			"applicability":"",
			"structure":"",
			"participants":"",
			"collaborations":"",
			"consequences":"",
			"implementation":"",
			"known-uses":"",
			"related-patterns":"",
			"link":"abstract-factory.html"

		},
		{
			"name" : "Builder",
			"type" : "Creational",
			"definition" : "Builder design pattern separates the construction of a complex object from its representation.",
			"intent":"The intent of the Builder design pattern is to separate the construction of a complex object from its representation. By doing so the same construction process can create different representations.",
			"image":"builder.jpeg"
		},
		{
			"name" : "Factory Design Pattern",
			"type" : "Creational",
			"definition" : "Define an interface for creating an object, but let subclass decide which class to instantiate. Factory method lets a class defer instantiation to the subclass.",
			"design-principles":[
			        "Depend on abstractions. Do not depend on concrete classes."
			],
			"image":"Factory design pattern.jpeg"
		},
		{
			"name" : "Object Pool",
			"type" : "Creational",
			"definition" : "Object Pool Design Pattern uses a set of initialized objects kept ready to use – a pool – rather than allocating and destroying them on demand.",
			"image":"Object Pool.jpeg"
		},
		{
			"name" : "Prototype",
			"type" : "Creational",
			"definition" : "Prototype Design Pattern is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects.",
			"image":"prototype.jpeg"
		},
		{
			"name" : "Singleton",
			"type" : "Creational",
			"definition" : "Singleton Design Pattern ensures a class only has one instance and provide a global point of access to it. This can be utilized for sharing data or behaviour across the application.",
			"image":"singleton.jpeg"
		},
		{
			"name":"Adapter",
			"type":"Structural",
			"definition" : "Adapter Design Pattern converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.",
			"image":"adapter.jpeg"
		},
		{
			"name":"Bridge",
			"type":"Structural",
			"definition" : "Bridge Design Pattern decouple an abstraction from its implementation so that the two can vary independently",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Composite",
			"type":"Structural",
			"definition" : "Composite Design Pattern allows you to compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Decorator",
			"type":"Structural",
			"definition" : "The Decorator Design Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",
			"design-principles":[
			        "Classes should be open for extension, but closed for modification."
			],
			"caution":["Be careful when chosing the areas of the code that needs to be extended; applying Open-Closed principle everywhere is wasteful, unnecessary and can lead to complex, hard to understand code."],
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Facade",
			"type":"Structural",
			"definition" : "Facade Design Pattern provides a unified interface to a set of insterfaces in a subsystem. Facade defines a higher level interface that makes the subsystem easier to use.",
			"design-principles":[
			        "Principle of Least Knowledge - talk only to your immediate friends."
			],
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Flyweight",
			"type":"Structural",
			"definition" : "Flyweight Design Pattern minimizes memory use by sharing as much data as possible with other similar objects. It is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. ",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Private Class Data",
			"type":"Structural",
			"definition" : "Private Class Design Pattern seeks to reduce exposure of attributes by limiting their visibility.",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Proxy",
			"type":"Structural",
			"definition" : "Proxy Design Pattern provides a surrogate or placeholder for another object to control access to it.",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Chain of responsibility",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Command",
			"type":"Behavioral",
			"definition" : "Command Design Pattern - encapsulate a request as an Object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Interpreter",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Iterator",
			"type":"Behavioral",
			"definition" : "Iterator Design Pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Mediator",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Memento",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Null Object",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Observer",
			"type":"Behavioral",
			"definition" : "The Observer Design Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.",
			"design-principles":[
			        "Strive for loosely coupled designs between objects that interact."
			],
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"State",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Strategy",
			"type":"Behavioral",
			"definition" : "The Strategy Design Pattern defines a family of algorithms, encapsulates each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.",
			"design-principles":[
									"Identify the aspects of your application that vary and separate them from what stays the same.",
									"Program to an interface(supertype), not an implementation.",
									"Favor Composition over Inheritance."
			                    ],
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Template method",
			"type":"Behavioral",
			"definition" : "The Template method Design Pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.",
			"image":"Abstract Factory.jpeg"
		},
		{
			"name":"Visitor",
			"type":"Behavioral",
			"definition" : "",
			"image":"Abstract Factory.jpeg"
		},
	],
	"anti-pattern" :[
	{
		"name" :"Golden Hammer",
		"problem":"you need to chose technologies for your development and you believe that exactly one technology must dominate the architecture.",
		"context":"you need to develop some new system or piece of software that doesn't fit well with the technology that the development team is familiar with.",
		"forces":["The development team is committed to the technology they know.", "The development team is not familiar with other technologies.","Unfamiliar technologies are seen as risky.","It is easy to plan and estimate for development using the familiar technology."],
		"supposed-solution":"use the familiar technology anywhay. The technology is applied obsessively to many problems,including places where it is clearly inappropriate.",
		"refactored-solution":"Expanding the knowledge of developers through education, training, and book study groups that expose developers to new solutions.",
		"examples":"Web companies keep using and maintaining their internal homegrown caching systems when open source alternatives are in use."
	},
	{
		"name" :"Golden Hammer",
		"problem":"you need to chose technologies for your development and you believe that exactly one technology must dominate the architecture.",
		"context":"you need to develop some new system or piece of software that doesn't fit well with the technology that the development team is familiar with.",
		"forces":["The development team is committed to the technology they know.", "The development team is not familiar with other technologies.","Unfamiliar technologies are seen as risky.","It is easy to plan and estimate for development using the familiar technology."],
		"supposed-solution":"use the familiar technology anywhay. The technology is applied obsessively to many problems,including places where it is clearly inappropriate.",
		"refactored-solution":"Expanding the knowledge of developers through education, training, and book study groups that expose developers to new solutions.",
		"examples":"Web companies keep using and maintaining their internal homegrown caching systems when open source alternatives are in use."
	}

	]
};


$(document).ready(function(){

	var parentRow = $("#designPatternHolder");
	jQuery.each( designpatterns.patterns, function(index,pattern){
		//filter out patterns if no definition is provided
		if(pattern.definition!=""){
			var colDiv = $('<div>');
		colDiv.addClass('col-sm-6');
		colDiv.addClass('col-md-4');

		var thumbnail = $('<div>');
		thumbnail.addClass('thumbnail');

		var image = $('<img>');
		image.attr('src', '/images/projects/design-patterns/'+pattern.image);
		image.attr('alt', 'Image missing');

		var caption = $('<div>');
		caption.addClass('caption');
		caption.append('<h3>'+pattern.name+'</h3>');
		caption.append('<p>'+pattern.definition+'</p>');
        //TODO: commenting for time being
		//thumbnail.append(image);
		thumbnail.append(caption);

		colDiv.append(thumbnail);
		parentRow.append(colDiv);
		}
		
	} );
});