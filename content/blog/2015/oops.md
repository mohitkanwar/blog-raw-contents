Object Oriented Programming
===========================
Any real world object, has some properties (which may or may not change over time) and some behavior (which may or may not vary depending upon other conditions).
e.g. A pencil is a real world object; which has the following properties:
<ul>
    <li> It is red in colour (will not change with time)</li>
     <li>It is 10 cm in length as of now (may change when sharpen)</li>
</ul> 

And it has the following behaviors:
<ul>
    <li>It leaves mark when used properly. </li>
    <li>The mark may vary depending upon the pressure applied. (Depends upon external factor)</li>
    <li>Its length gets reduced when sharpened (constant behavior)</li>
</ul>
Just like this example, the real world objects have many more features, but in programming we cater only the required features.

<p>
Programming in OOPS, has its own advantages. e.g. It is easier for the programmers to relate an Object to the real world and program what is expected. It is really helpful as and when the application grows bigger and there are multiple objects interacting with each other. It helps in distributing responsibilities within the objective world enabling focused thinking.
</p>
<p>
Another important feature associated with OOP (Object Oriented Programming) is classification of objects. Since world (real/virtual) is full of objects, it is difficult to manage them as individual objects. We need a way to classify these objects helping us relate different objects and their features. e.g. a black coloured pencil. It is all the same as the one used in previous example, but is a different object. But since they both are pencils, they belong to same class "Pencil". Whereas a pen, which is very similar to a pencil, belongs to a different Class. Although, both Pen and Pencil are "Writing Instruments".</p>
<p>Object Oriented Programming has following principles:</p>
<div class="row">
    <div class="col-lg-12">
        <h4>Abstraction</h4>
        <p>Abstraction is defined as <i>the quality of dealing with ideas rather than events</i> or in other words <i>freedom from representational qualities</i>. It enables programmers to focus on <i>what</i> to program rather than <i>how</i>. Abstraction can be looked as a contract, for exposing the functionality that we are providing. Implementation details can be hidden using this concept.                                
        </p>
        <p>
        For example, if we need a class that writes we can be sure that it must have a method "write"
        </p>
        <pre><code>
            abstract class writer{
                write();
            }
        </code></pre>
        <p>So, what we have done here is, designed a high level class which is abstract i.e. it knows "what" functionality do we need to have, but "how" to perform that functionality is out of scope for this class.
        </p>
        <p>  
        This has many advantages
        </p>
        <ul>
            <li>We expose the minimum information required to external entities, this enables focused thinking, avoids confusion and prevents unintended promises</li>
            <li>We leave a room for improvement in future, which is not possible if implementation details are exposed.</li>
        </ul>
    </div>
    <div class="col-lg-12">
    <h4>Inheritence</h4>
    <p>Inheritance in general English means, acquire and pass on . It is existing in our culture since long. Fathers and fore-fathers acquire lands with their hard work and then pass on to their kids, even nature favors Inheritance. All body features like height, skin/eye/hair colour etc are governed by genes inherited by us from our parents. This prevents re-inventing the wheel and attain fast progress.
    Same is the case in OOP. We create a parent class with few basic properties/behavior. All the child classes of this parent  would contain the same properties/behavior as that of parent. Although, the child can acquire more properties/behavior or change the implementation of the behavior all together. </p>
    <pre><code>
        class WritingInstrument{
           colour
           write(){
           }
        } 
         class pen (child of parent){ 
          inkcolour
         } 
    </code></pre>
    <p>
    In the example  above, the parent class (WritingInstrument) has a property colour and a behavior write. When the child class (pen) is defined, defining colour and write again is not required. They are present in pen class by the help of inheritance. However, the child class can define additional properties/behaviour of its own.</p>
    <p>So how can we use this in practice? We developers are super lazy. We don't want to type in something again and again. Keeping multiple copies of same code is also not preferred as</p>
    <ul>
        <li>It Helps code management, less copies means less code</li>
        <li>One place change visible everywhere</li>
        <li>Less errors due to less code</li>
        <li>Generalization is achieved as one code is serving multiple requirements</li>
        <li>Focused coding</li>
        <li>Focused testing</li>
    </ul>
Inheritance in Java is achieved through extends or implements keyword.
<pre>
<code>
    class WritingInstrument{
    }

    class Pen extends WritingInstrument{
    }
</code></pre>
</div>
<div class="col-lg-12">
    <h4>Polymorphism</h4>
    <p>The word polymorphism is derived from two words</p>
    <ul>
        <li><b>Poly</b> : multiple/ more than one</li>
        <li><b>morph</b> : Form/ shape </li>
    </ul>
    Literally, the word polymorphism refers to the ability of an object that behave differently in different conditions.
    <p> In programming, polymorphism can be achieved at multiple places</p>
    <ul>
        <li>Classes</li>
        <li>Methods</li>
        <li>Operators</li>
        All of the above can behave differently under different conditions, may be the context in which they are being used.
        It is helpful, as the client do not need to know multiple aspects, and the desired functionality is achieved by picking the required information from the context.
    </ul>
    <pre><code>
                        class writingObjects{
                        write(){
                        // write using default colours
                        }
                        }
    </code></pre>
    <pre><code>
                        class pencil extends writingObjects{
                        write(){
                        //write with grey colour, the text written is erasable
                        }
    </code></pre>
    <pre><code>
                         class pen extends writingObjects{
                        write(){
                        //write with blue colour, the text written is not erasable
                        }
                        }
    </code></pre>
    <pre><code>
                        class Main{
                        
                        main(){
                        writingObjects wr= Object of writingObjects()
                        
                        wr.write(); // 1st call
                        
                        writingObjects wr= Object of Pen()
                         
                         wr.write() // 2nd call
                         
                         writingObjects wr2= Object of Pencil()
                         
                         wr2.write() // 3rd call
                         
                        }
                        }
    </code></pre>
    <p>
        In the example above, we have a default implementation in writingObjects, which is extended/overridden by child classes Pen and Pencil. The write method is invoked 3 times in Main class. Each time a different implementation is invoked depending upon which object is in the context. Here, the method <i>write</i> has multiple behaviours hence it is polymorphic.
    </p>
</div>
<div class="col-lg-12">
    <h4>Encapsulation</h4>
    <p>Encapsulation is defined as collecting related data/ functionality in a single unit. It helps in ease of access/modification of data. E.g. If we have a need to print all the properties that a user posses, we have following options </p>
    <pre><code>
    printUserProperties(username, userid, firstname, lastname, email, phone, ... ... ....)
    </code></pre>
    <p> We created a method which accepts all the features and print them one by one. With the increase in number of list of items, the ability to identify the correct field diminishes, also with addition/deletion of even a single field, changes the signature of this method. Hence we need to replace all clients of this method even if the newly added field is not required by them . To make the code more readable, and allow easier modifications, we encapsulate the properties in a class and pass it as a collective object.
    </p>
    <pre><code>
        class user{
                    userName
                    userId
                    firstname
                    lastname
                    email
                    phone
                    ..
                    ..
                    ..
                              
        }
    </code></pre>
    <pre><code>
        printUserProperties(user){
        
        }
    </code></pre>
    </div>
</div>     
<div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h3>Objects</h3>
            <p>An object is a software bundle of variables and related methods. You can represent real-world objects using software objects. You might want to represent real-world dogs as software objects in an animation program or a real-world bicycle as a software object within an electronic exercise bike.</p>
          </div>
        </div>
<div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h3>Classes</h3>
            <p>In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions, methods).</p>
          </div>
        </div>
<div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h3>SOLID Principles</h3>
            <p>The SOLID acronym was introduced by Michael Feathers for the "first five principles" named by Robert C. Martin in the early 2000s. The principles, when applied together, intend to make it more likely that a programmer will create a system that is easy to maintain and extend over time. The principles of SOLID are guidelines that can be applied while working on software to remove code smells by causing the programmer to refactor the software's source code until it is both legible and extensible. It is part of an overall strategy of agile and adaptive programming.</p>
          </div>
        </div>
<div class="row">
    <div class="col-lg-12">
        <h4>Single responsibility principle</h4>
            <p>In object-oriented programming, the single responsibility principle states that every class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility.</p>
    </div>
    <div class="col-lg-12">
        <h4>Open/closed principle</h4>
        <p>In object-oriented programming, the open/closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"; that is, such an entity can allow its behaviour to be extended without modifying its source code.</p>
    </div>
    <div class="col-lg-12">
        <h4>Liskov substitution principle</h4>
        <p>Substitutability is a principle in object-oriented programming. It states that, in a computer program, if S is a subtype of T, then objects of type T may be replaced with objects of type S (i.e., objects of type S may substitute objects of type T) without altering any of the desirable properties of that program (correctness, task performed, etc.).</p>
    </div>
    <div class="col-lg-12">
    <h4>Interface segregation principle</h4>
    <p>The interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use. ISP splits interfaces which are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. ISP is intended to keep a system decoupled and thus easier to refactor, change, and redeploy.</p>
    </div>
    <div class="col-lg-12">
        <h4>Dependency inversion principle</h4>
        <p>In object-oriented programming, the dependency inversion principle refers to a specific form of decoupling software modules. When following this principle, the conventional dependency relationships established from high-level, policy-setting modules to low-level, dependency modules are inverted (i.e. reversed), thus rendering high-level modules independent of the low-level module implementation details. The principle states:
        <ul>
        <li>High-level modules should not depend on low-level modules. Both should depend on abstractions.</li>
        <li>Abstractions should not depend on details. Details should depend on abstractions.</li>
        </ul>
        The principle inverts the way some people may think about object-oriented design, dictating that both high- and low-level objects must depend on the same abstraction.</p>
    </div>
</div>
<div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h3>GRASP Principles</h3>
            <p>General Responsibility Assignment Software Patterns (or Principles), abbreviated GRASP, consists of guidelines for assigning responsibility to classes and objects in object-oriented design.</p>
          </div>
</div>
<div class="row">
    <div class="col-lg-6">
        <div class="">
                <h4>Controller</h4>
                <p>The Controller pattern assigns the responsibility of dealing with system events to a non-UI class that represents the overall system or a use case scenario. 
                A Controller :</p>
                <ul>
                <li> is a non-user interface object responsible for receiving or handling a system event.</li>
                <li> should be used to deal with all system events of a single (or related multiple) use cases</li>
                <li> is the first object beyond the UI layer that controls a system operation.
                </li>
                </ul>
 <p> It should not do much work itself, apart from controlling the flow of the event</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="">
                <h4>Creator</h4>
                <p>The responsibility of a creator class is to instantiate and create objects for usage. It knows what object to be created, and the initialization values. Sometimes the creator class creates objects actively and stores them in a cache, and provides one instance as and when required or asked for.
</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="">
                <h4>High Cohesion</h4>
                <p>High Cohesion is an evaluative pattern that attempts to keep objects appropriately focused, manageable and understandable. High cohesion is generally used in support of Low Coupling. High cohesion means that the responsibilities of a given element are strongly related and highly focused. Breaking programs into classes and subsystems is an example of activities that increase the cohesive properties of a system. Alternatively, low cohesion is a situation in which a given element has too many unrelated responsibilities. Elements with low cohesion often suffer from being hard to comprehend, hard to reuse, hard to maintain and averse to change.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="">
                <h4>Indirection</h4>
                <p>The Indirection pattern supports low coupling (and reuse potential) between two elements by assigning the responsibility of mediation between them to an intermediate object. An example of this is the introduction of a controller component for mediation between data (model) and its representation (view) in the Model-view-controller pattern.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div >
                <h4>Information Expert</h4>
                <p>Information Expert (also Expert or the Expert Principle) is a principle used to determine where to delegate responsibilities. These responsibilities include methods, computed fields, and so on.

Using the principle of Information Expert, a general approach to assigning responsibilities is to look at a given responsibility, determine the information needed to fulfill it, and then determine where that information is stored.

Information Expert will lead to placing the responsibility on the class with the most information required to fulfill it.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div >
                <h4>Low Coupling</h4>
                <p>Low Coupling is an evaluative pattern, which dictates how to assign responsibilities to support:

    lower dependency between the classes,
    change in one class having lower impact on other classes,
    higher reuse potential.
</p>
            </div>
          </div>
           <div class="col-lg-6">
            <div >
                <h4>Polymorphism</h4>
                <p>According to Polymorphism, responsibility of defining the variation of behaviors based on type is assigned to the types for which this variation happens. This is achieved using polymorphic operations.</p>
            </div>
          </div>
           <div class="col-lg-6">
            <div >
                <h4>Protected Variations</h4>
                <p>The Protected Variations pattern protects elements from the variations on other elements (objects, systems, subsystems) by wrapping the focus of instability with an interface and using polymorphism to create various implementations of this interface.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div >
                <h4>Pure Fabrication</h4>
                <p>A Pure Fabrication is a class that does not represent a concept in the problem domain, specially made up to achieve low coupling, high cohesion, and the reuse potential thereof derived (when a solution presented by the Information Expert pattern does not). This kind of class is called "Service" in Domain-driven design.</p>
            </div>
          </div>
          
      </div>
       
<div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h3>Criticism</h3>
<div class="row">
         
            <p>A study by Potok et al. has shown no significant difference in productivity between OOP and procedural approaches.</p>
            
             <div class="col-lg-12">
          
              <blockquote>
                <p>critical comparison of OOP to other technologies, relational in particular, is difficult because of lack of an agreed-upon and rigorous definition of OOP</p>
                <cite title="Source Title">Christopher J. Date</cite>
              </blockquote>
          </div>
          <div class="col-lg-12">
              <blockquote>
                <p>compared to other languages (LISP dialects, functional languages, etc.) OOP languages have no unique strengths, and inflict a heavy burden of unneeded complexity.</p>
                <cite title="Source Title">Lawrence Krubner</cite>
              </blockquote>
          </div>
          <div class="col-lg-12">
              <blockquote>
                <p>I find OOP technically unsound. It attempts to decompose the world in terms of interfaces that vary on a single type. To deal with the real problems you need multi-sorted algebras — families of interfaces that span multiple types. I find OOP philosophically unsound. It claims that everything is an object. Even if it is true it is not very interesting — saying that everything is an object is saying nothing at all.</p>
                <cite title="Source Title">Alexander Stepanov</cite>
              </blockquote>
          </div>
          <div class="col-lg-12">
              <blockquote>
                <p>OOP's popularity within large companies is due to "large (and frequently changing) groups of mediocre programmers." The discipline imposed by OOP prevents any one programmer from "doing too much damage."</p><cite title="Source Title">Paul Graham</cite>
              </blockquote>
          </div>
          <div class="col-lg-12">
              <blockquote>
                <p>Object Oriented Programming puts the Nouns first and foremost. Why would you go to such lengths to put one part of speech on a pedestal? Why should one kind of concept take precedence over another? It's not as if OOP has suddenly made verbs less important in the way we actually think. It's a strangely skewed perspective.<cite title="Source Title">Steve Yegge</cite></p>
              </blockquote>
          </div>
         </div>
         <div>

<p>
Rich Hickey, creator of Clojure, described object systems as overly simplistic models of the real world. He emphasized the inability of OOP to model time properly, which is getting increasingly problematic as software systems become more concurrent.</p>
<p>
Eric S. Raymond, a Unix programmer and open-source software advocate, has been critical of claims that present object-oriented programming as the "One True Solution," and has written that object-oriented programming languages tend to encourage thickly layered programs that destroy transparency.[42] Raymond contrasts this to the approach taken with Unix and the C programming language.</p>
          </div>
        </div>
        
        
          
        </div>
<div class="row">
          <div class="col-lg-12">
                <div class="">
                <h2>References</h2>
                      <div class="list-group">
                        <a href="http://searchsoa.techtarget.com/definition/object-title=Object Oriented Programming
date=2015-09-16
type=post
tags=blog
status=published
summary=Object Oriented Programming is a programming style in which the program is made with components which match to real world objects.
category=technology
oriented-programming" target="_blank" class="list-group-item">By Margaret Rouse @ WhatIs.com
                        </a>
                        <a href="https://en.wikipedia.org/?title=Object-oriented_programming" target="_blank" class="list-group-item"> Wikipedia! </a>
                        <a href="http://www.sitepoint.com/quick-guide-to-polymorphism-in-java/" target="_blank" class="list-group-item">inheritance is polymorphism</a>
                        <a href="https://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29" target="_blank" class="list-group-item">SOLID (Object Oriented Design)</a>
                        <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle" target="_blank" class="list-group-item">Single Responsibility Principle</a>
                        <a href="http://c2.com/cgi/wiki?ArgumentsAgainstOop" target="_blank" class="list-group-item">Arguments against OOPS</a>
                        <a href="http://duramecho.com/ComputerInformation/WhatIsObjectOrientedProgramming.html" target="_blank" class="list-group-item">What is OOPS (without the hype)</a>
                      </div>
                    </div>
                </div>
</div>
       
