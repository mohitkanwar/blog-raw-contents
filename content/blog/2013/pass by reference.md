Pass by Reference
=================
Well, this is one of those tricky questions. The correct answer to this question would be

Theoretically: No, Practically: Yes

All passing in Java are Pass-By-Value only. Which means, the value of argument being passed is copied and provided to the called method. In case when the argument of method is of type Object (or sub-class) the value of such an argument is a reference. In this case a copy of this value (which is a reference) is made (but it still refers to same reference) and passed to the called method. So theoretically it is Pass-by-Value but it behaves like Pass-By-Reference here because the value itself is a reference here. 
