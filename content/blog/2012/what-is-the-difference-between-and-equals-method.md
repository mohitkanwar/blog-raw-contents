Equals Operator vs Method
=========================
Equating two pbjects is a very common condition required while writing programs in any language.
Java provides us two options for equating two objects.

* By Using Operator ==
* By Using Method equals

To understand which one should we chose, let us think like the creators of the Java language would have thought. Assume that we are going to write the functionality for the operator "==". Our aim is to find out if L.H.S is equal to R.H.S or not. Another target that we need to achieve is that this operator should work on all kinds of objects, including those which are not even defined today (remember, we are writing the java language and Java programmers are going to use our functionality).

How can we equate two objects, whose classes are not even written till date? There has to be a factor on which we can decide if the objects are equal or not. There is one, and only one such scenario in which we can be 100% sure that L.H.S is equal to R.H.S, and that is when *both the objects are placed on same memory location*. This is true, because one memory location cannot keep a hold of more than one object reference. And this is exactly what Java guys did. They wrote the code for this operator to match the references (in turn, Memory location) on both the sides. If they refer to same memory location, they are equal else not.

If == operator solves our purpose, then what is the use of equals method? In fact, if you check the class Object in java, equals method does nothing more than using == operator.

<pre class="prettyprint">
<code>public boolean equals(Object obj) {   

        return (this == obj)

 }</code>
</pre>


Consider a scenario, you have two objects of same class, having exactly same values of member variables but since they are present on different memory locations, == operator will return 'false' for them.

What will equals method return? 

To be politically correct, I will simply say that when equals method is called, its definition will be executed.

Where is the definition present? It is in the Object Class. So the equals method will still return 'false' as it is simply calling == operator.

So what is the solution, if we want to equate two objects based on the values inside,and not on the basis of its memory location?

Remember the concept of method overriding? It is the technique of hiding method definition in parent class by providing a new method definition with same signature in child class. So making use of method overriding we will give the definition of equals method, and it will behave according to this new definition. One fine example can be seen in String class. 

The equals method here, equates two objects on the basis of there values and ignores the memory location they are on.

So for String class
<pre class="prettyprint">
<code>String first = new String ("test"); // creates a new string object with value "test"
String second= new String ("test");// creates another string object with value "test" at different memory location
first.equals(second) // returns true as values are compared
first==second // returns false as memory location is compared.</code>
</pre>

This was good for String class, only because  String defines its own equals method.  Point to be noted here is for any class which does not defines equals method of its own, the method definition will still be available (From top most parent class i.e. Object). And for such classes equals method will behave exactly similar to == operator.
