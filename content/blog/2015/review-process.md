Code-Review Process
===================
Reviewing a code essentially means, re-visiting the problem which is fixed by the code from a fresh view point. When a single brain is working on the code for long, (S)he may become biased towards the code and may miss some potential bugs.  
Along with identification of bugs, code review helps in improving the code readability and code quality in general. If the code is not easily understandable in first go to the person who hasn't worked on it, It needs to be improved.  
Code review process can happen with single peer or with whole team. 
### Points to pre-review (discuss with developer)

 * Is the code compiling?
 * Is the first functionality change fine?
 * Are required test cases written?
 * Are all the test cases passing?

### Points to be taken care of during review

 * Read the requirement and re-word it as per your understanding
 * Talk to the QA with your understanding
 * Talk to the developer with your refined (after QA's discussion) understanding
 * Check
    * Code Compilation
    * Functionality change (compare it to code base where the change is not present)
    * Think of the required test cases
    * Compare them with the test cases already written
    * Check test case report
    * Check naming convention -- (check relevance as a human)
    * Check out for unused variables -- (automate)
    * Check out for variables used only once  -- (automate)
    * Double check if Last date of modification of file is more than 2 sprints -- (automate)
    * Look for Side affects of each command 
    * Is the code readable?
    * Concurrency- check for multi-threading related issues
    * Consistency
    * Performance
    * Exception handling
    * Logging
    * Look for Potential Copy-Paste Errors
    * Simplicity
    * Reuse of existing code
