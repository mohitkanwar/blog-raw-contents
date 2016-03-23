Faking String Class
===================
**Can we create and compile a class String, with package name java.lang ? Will it override the functionality of the existing class present in JVM ?**

Surprizingly, we can create any class in any package, and if basic rules of compilation are followed, ***it will compile fine***. Going by that, we can actually compile a class String in java.lang Package. But at run-time, JVM's java.lang package has a higher priority over user created java.lang package, hence original class (provided by JVM) will be referred. Try creating a String class with a method "printMyName() in java.lang package. Create a main class and call that method. The program will not give any compilation error (as at compile time the class u created is being referred) but at run time you will get java.lang.NoSuchMethodError (as the original class which is present in JVM is being referred and it does not contains this method)
