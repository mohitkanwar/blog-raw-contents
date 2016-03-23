String and `new` Keyword
========================
What is the difference between following String object creations?

    String a = new String("hello world");
    String a ="hello world";

When ever a java program encounters a first double quote (") it treats it as beginning of a String Object, and the ending is recognized by consecutive double quote.

going by the above fact, let us analyse the above two statements

L.H.S:

<pre><code>String a </code></pre>: We are creating a reference of type String and naming it a

R.H.S

<pre><code>"hello world"</code></pre>: A string object with value "hello world" is created and added in String pool

In the statement <pre><code>String a ="hello world";</code></pre> the reference a is now referring to the object created and added to String pool.

<pre><code>new String ("hello world");</code></pre>: In this statement one object is created with value "hello world" and the same is added to the string pool when the highlighted part is encountered. new String ("hello world"). After that, another object is created by the new operator new String ("hello world"), please note that this newly created object (by new operator) is not added to String pool.
<pre><code>
	String a = new String("hello world");
</code></pre>
In the above statement, the reference a is referring to an object which is not present in String pool.

There is a method intern() available in String class. When the intern method is invoked, if the pool already contains a string equal to this String object as determined by the equals(Object) method, then the string from the pool is returned. Otherwise, this String object is added to the pool and a reference to this String object(from pool) is returned.
