Alternative initiation point of a program
=========================================

public static void main(String[] args) is usually considered the entry point of an application (which is true). But there is a case where we can tweak around and omit the need of main method completely. The answer lies in the keyword "static".

A static block is one per class block (independent of objects). since this block is one per class, it will be called at the time of class load, not at the time of object creation. Usually this block is used to initialize static variables of the class.

static blocks are loaded first in JVM (even prior to main method). we can even call other static methods from this block (exactly similar to main method).

consider the code below:
<pre><code>public class WithoutMain{
	static{
			System.out.println("Hello world");
	}
}</code></pre>
When this class is loaded in JVM, the anonymous static block is loaded and executed before anything else and the SysOut statement is executed.

Being said this, the entry point remains still the same (main method) i.e. even if static block is present, the JVM will look for main method. if this method does not exist, following exception would be raised

Exception in thread "main" java.lang.NoSuchMethodError: main

We can even tweak around this. The exit(int) method of System class is used to exit the program. The int argument defines the state of program exit. A successful program will exit with a state '0'. Hence writing a statement System.exit(0); would immediately end the application (before JVM can try to find the main method). 

 
<pre><code>public class WithoutMain{
	static{
		System.out.println("Hello world");
		System.exit(0);
	}
}</code></pre>