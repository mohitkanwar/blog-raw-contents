Charsequence vs String
======================
CharSequence represents an interface to a sequence of characters, with operations common to all classes implementing it. However, in particular, CharSequence does not make any guarantees about whether the sequence is mutable or not. So, you can have an immutable implementing class, like String or mutable ones, like StringBuilder and StringBuffer.

In addition, CharSequence does not refine the general purpose implementations of the equals() or hashCode() methods, so there is no guarantee that objects of different classes implementing CharSequence will compare to be equal even if the underlying sequence that they hold is the same. So, given:
<pre><code>
String seq1 = "hello";

StringBuilder seq2 = new StringBuilder("hello");

StringBuffer seq3 = new StringBuffer("hello");
</code></pre>
comparisons between these three using .equals() return false on Java 1.6, but I can't find any guarantees that this will not change in the future (though it's probably fairly unlikely).

And CharSequence[] and String[] are just arrays of their respective types.

The practical upshot of this is to compare CharSequences for equality, you have to use their toString() method and compare the resultant Strings, since this is guaranteed to return true if the underlying sequences are the same.
